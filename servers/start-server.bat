@echo off
setlocal enabledelayedexpansion

REM Check if running as admin
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo Requesting admin privileges...
    powershell -Command "Start-Process cmd -ArgumentList '/c \"%~f0\"' -Verb runAs"
    exit /b
)

REM Get current directory
cd /d "%~dp0"

REM Display server info
cls
echo.
echo ========================================
echo Network Server Started!
echo ========================================
echo.
echo Share this link with others on WiFi:
echo.
echo    http://10.69.73.163:8080
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Start PowerShell HTTP Server
powershell -NoProfile -Command {
    Add-Type -AssemblyName System.Net
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://+:8080/")
    
    try {
        $listener.Start()
        Write-Host "Server running at http://10.69.73.163:8080" -ForegroundColor Green
        
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
                Write-Host "Error handling request: $_" -ForegroundColor Red
            }
        }
    } catch {
        Write-Host "Error starting server: $_" -ForegroundColor Red
        Write-Host "Make sure no other service is using port 8080" -ForegroundColor Yellow
        pause
    }
}

pause
