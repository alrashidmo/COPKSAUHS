Add-Type -AssemblyName System.Net
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:8080/")
$listener.Start()
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Server started and accessible on WiFi!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Local access:     http://localhost:8080" -ForegroundColor Yellow
Write-Host "Network access:   http://10.69.73.163:8080" -ForegroundColor Yellow
Write-Host ""
Write-Host "Share this link with others on your WiFi:" -ForegroundColor Cyan
Write-Host "http://10.69.73.163:8080" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""

while ($true) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $localPath = $request.Url.LocalPath
        if ($localPath -eq "/") { $localPath = "/index.html" }
        $filePath = Join-Path (Get-Location) $localPath.TrimStart("/")
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = Get-Content $filePath -Raw -Encoding UTF8
            $mimeType = "text/plain"
            $ext = [IO.Path]::GetExtension($filePath)
            switch ($ext) {
                ".html" { $mimeType = "text/html" }
                ".css" { $mimeType = "text/css" }
                ".js" { $mimeType = "application/javascript" }
                ".json" { $mimeType = "application/json" }
                ".csv" { $mimeType = "text/csv" }
                ".png" { $mimeType = "image/png" }
                ".jpg" { $mimeType = "image/jpeg" }
                ".gif" { $mimeType = "image/gif" }
            }
            $response.ContentType = $mimeType
            $response.ContentEncoding = [System.Text.Encoding]::UTF8
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # Silently handle errors
    }
}
