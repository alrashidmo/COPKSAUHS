Add-Type -AssemblyName System.Net
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://*:8000/")
$listener.Start()
Write-Host "Server started at http://*:8000 (accessible on network)"
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
        Write-Host "Error handling request: $_"
    }
}