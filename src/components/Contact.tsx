import React, { FormEvent, useState } from 'react';
import '../styles/contact.css'


const ContactForm = () => {
    // Estados para gerenciar o formulário
    const [email, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    // Função de envio de e-mail
    const sendEmail = async () => {
        try {
            const response = await fetch(
                '/api', 
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3MDYwOTIzODg1NDIxODAzMTc0IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJjZWtzY2hhZGVja0BtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJpd0lGZS1jSXpUeVdNWWhfSTNfVW93IiwibmJmIjoxNzMyMTYzMTE1LCJpYXQiOjE3MzIxNjM0MTUsImV4cCI6MTczMjE2NzAxNSwianRpIjoiNDJjMGE5MjhhN2JlNzllYjRkNTdhMTRlMjQ0OGEyNzIwNGYxZDc2NyJ9.QPhkGlEmI8yNP4tPRzqe6h5HqiamLYhenz_dpPDQ_VjCtk1qpBTeVE2gWTgMpCYo2A-ALjW2n5hcXQQHPeIkESIz-Pnl3jx0qz7deSFxPCap4wrbSYRzlFwpI8Q181PcNqejumyYBYedfMIOtQjIGg8k4KJnwruIuqBXdeYF_vKWi8EmDjF9slxLZdZZdFYlSVnTV_il-o34PS-ET0HwPRA2gmqOzRf7WNHKfjJbC1Zoe56cwF016orpfSqmJTdN5xyb0B_3HwH43P8tJOfyHN8lxnuyREao5gvHLA8c4M5PQpe2scuPc5jtsZZKDvRNzDpJnF0QW5uRpB1MfwvCdg"
                    },
                    body: JSON.stringify({
                        toMail: email,
                        content: subject,
                    })
                }
            );

            // Verifica se a resposta foi bem-sucedida
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                // Trata erros de resposta
                const errorData = await response.text();
                throw new Error(errorData || 'Erro no envio do e-mail');
            }
        } catch (error) {
            console.error('Erro no envio de e-mail:', error);
            throw error;
        }
    };

    // Manipulado de submissão do formulário
    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Validações adicionais
        if (!email.trim() || !subject.trim()) {
            setStatus('Erro: Preencha todos os campos');
            return;
        }

        setLoading(true);
        setStatus('');

        try {
            await sendEmail();
            
            // Sucesso
            setStatus('E-mail enviado com sucesso!');
            
            // Limpa campos
            setMail('');
            setSubject('');
        } catch (error) {
            // Erro no envio
            setStatus(`Erro: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Seu melhor Email"
                className="contact-input"
                required
                disabled={loading}
            />
            
            <textarea
                typeof="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Motivo do contato: Exemplo: Gostei muito da atração Encontro com os Leões, gostaria de saber mais sobre os horários e preços para agendamento de grupos."
                className="contact-textarea"
                required
                disabled={loading}
            />

            <button 
                type="submit" 
                className="contact-button" 
                disabled={loading}
            >
                {loading ? 'Enviando...' : 'Enviar'}
            </button>

            {status && (
                <div 
                    className={`status-message ${
                        status.includes('Erro') ? 'error' : 'success'
                    }`}
                >
                    {status}
                </div>
            )}
        </form>
    );
};

export default ContactForm;