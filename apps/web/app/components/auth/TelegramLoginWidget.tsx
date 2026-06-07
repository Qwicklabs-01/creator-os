"use client";

import { useEffect, useRef } from 'react';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

interface TelegramLoginWidgetProps {
  botName: string;
  onAuth: (user: TelegramUser) => void;
}

export function TelegramLoginWidget({ botName, onAuth }: TelegramLoginWidgetProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) return;
    
    // Prevent duplicate script injection
    if (document.getElementById('telegram-login-script')) return;

    (window as any).onTelegramAuth = function(user: TelegramUser) {
      onAuth(user);
    };

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', botName);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '12');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    script.id = 'telegram-login-script';
    
    ref.current.appendChild(script);
  }, [botName, onAuth]);

  return (
    <div 
      ref={ref} 
      className="flex justify-center items-center w-full bg-surface border border-border rounded-xl overflow-hidden py-1"
      style={{ minHeight: '48px' }}
    ></div>
  );
}
