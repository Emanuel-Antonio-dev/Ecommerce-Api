import dayjs from "dayjs"
function OTPTemplate(otp: number, expireIn: Date): string{
    const expireInMinutes = dayjs(expireIn).diff(dayjs(), "minute")
    return `
    <!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificação de Segurança</title>
    <style>
        :root {
            --primary-color: #4361ee;
            --secondary-color: #3a0ca3;
            --accent-color: #f72585;
            --light-color: #f8f9fa;
            --dark-color: #212529;
            --success-color: #4cc9f0;
            --warning-color: #f8961e;
            --error-color: #ef233c;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .otp-container {
            background-color: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 450px;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .otp-header {
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 25px;
            text-align: center;
        }
        
        .otp-header h1 {
            font-size: 1.8rem;
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .otp-header p {
            opacity: 0.9;
            font-size: 0.9rem;
        }
        
        .otp-content {
            padding: 30px;
        }
        
        .otp-icon {
            text-align: center;
            margin-bottom: 25px;
        }
        
        .otp-icon svg {
            width: 80px;
            height: 80px;
            fill: var(--primary-color);
        }
        
        .otp-message {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .otp-message h2 {
            color: var(--dark-color);
            margin-bottom: 10px;
            font-size: 1.3rem;
        }
        
        .otp-message p {
            color: #666;
            line-height: 1.6;
        }
        
        .otp-code {
            background-color: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            margin-bottom: 30px;
            border: 1px dashed #ddd;
        }
        
        .otp-code span {
            display: inline-block;
            font-size: 2.2rem;
            letter-spacing: 5px;
            color: var(--secondary-color);
            font-weight: 700;
            padding: 0 10px;
        }
        
        .otp-timer {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 25px;
            color: #666;
        }
        
        .otp-timer svg {
            width: 18px;
            height: 18px;
            fill: var(--warning-color);
            margin-right: 8px;
        }
        
        .otp-actions {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .btn {
            border: none;
            border-radius: 8px;
            padding: 14px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .btn-primary {
            background-color: var(--primary-color);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: var(--secondary-color);
        }
        
        .btn-secondary {
            background-color: white;
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
        }
        
        .btn-secondary:hover {
            background-color: #f0f2f5;
        }
        
        .btn svg {
            width: 18px;
            height: 18px;
            margin-right: 8px;
        }
        
        .otp-note {
            font-size: 0.8rem;
            color: #999;
            text-align: center;
            margin-top: 20px;
            line-height: 1.5;
        }
        
        @media (max-width: 480px) {
            .otp-container {
                border-radius: 12px;
            }
            
            .otp-header {
                padding: 20px;
            }
            
            .otp-content {
                padding: 20px;
            }
            
            .otp-code span {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <div class="otp-container">
        <div class="otp-header">
            <h1>Verificação de Segurança</h1>
            <p>Por favor, prove-nos que quem és!</p>
        </div>
        
        <div class="otp-content">
            <div class="otp-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M12,11c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1s1-0.45,1-1v-3C13,11.45,12.55,11,12,11z M12,8c-0.55,0-1-0.45-1-1 s0.45-1,1-1s1,0.45,1,1S12.55,8,12,8z"/>
                </svg>
            </div>
            
            <div class="otp-message">
                <h2>Código de Verificação</h2>
                <p>Este códio foi enviado pela Academia EGAF, por favor insira este código para confirmar sua identidade.</p>
            </div>
            
            <div class="otp-code">
                <span>${otp}</span>
            </div>            
            <p class="otp-note">
                Por questões de segurança este código expira em ${expireInMinutes} minutos, não compartilhe este código com ninguém. 
                Nossa equipe nunca solicitará seu código de verificação.
            </p>
        </div>
    </div>
</body>
</html>
    `
}
export {OTPTemplate}