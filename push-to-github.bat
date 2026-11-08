@echo off
cd /d "%~dp0"
echo ========================================================
echo Pushing "What's the weather?" to GitHub...
echo Repository: https://github.com/devnarayan27/What-s-the-Weather-.git
echo ========================================================
echo.

"C:\Users\devan\.gemini\antigravity\scratch\mingit\cmd\git.exe" push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ----------------------------------------------------
    echo If prompted for Password, use a GitHub Personal Access Token (PAT).
    echo Generate one here: https://github.com/settings/tokens
    echo ----------------------------------------------------
) else (
    echo.
    echo ====================================================
    echo Successfully pushed to https://github.com/devnarayan27/What-s-the-Weather-!
    echo ====================================================
)
pause
