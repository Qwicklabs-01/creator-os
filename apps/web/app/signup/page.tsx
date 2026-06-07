"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "../../utils/supabase/client";
import { TelegramLoginWidget } from "../components/auth/TelegramLoginWidget";

const socialProviders = [
  {
    name: "Google",
    id: "google",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    id: "github",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },


  {
    name: "Discord",
    id: "discord",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#5865F2">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    id: "notion",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.12 3.14l-2.01 1.76v13.56l2.12 1.63h14.7l2.12-1.63V4.9l-2.01-1.76H4.12zm1.61 2.82h12.55v11.85H5.73V5.96zm4.8 2.05v6.52l4-6.52h1.67v8.5h-1.5v-6.6l-4.05 6.6H8.97v-8.5h1.56z"/>
      </svg>
    ),
  },
];

export default function SignupPage() {
  const [authMode, setAuthMode] = useState<"email" | "phone" | "verify">("email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const passwordStrength = (() => {
    if (password.length === 0) return { level: 0, label: "", color: "" };
    if (password.length < 6) return { level: 1, label: "Weak", color: "bg-error" };
    if (password.length < 10) return { level: 2, label: "Fair", color: "bg-accent" };
    if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password))
      return { level: 3, label: "Strong", color: "bg-success" };
    return { level: 2, label: "Fair", color: "bg-accent" };
  })();

  const handleSocialSignup = async (providerName: string) => {
    setSocialLoading(providerName);
    
    const providerMap: Record<string, any> = {
      "Google": "google",
      "GitHub": "github",
      "Discord": "discord",
      "Notion": "notion",
    };

    const providerId = providerMap[providerName];
    
    if (!providerId) {
      setError(`${providerName} is not supported directly via Supabase Auth yet.`);
      setSocialLoading(null);
      return;
    }
    
    const supabase = createClient();
    try {
      const { error } = await supabase.auth.signInWithOAuth({ 
        provider: providerId,
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });
      if (error) throw error;
    } catch (e: any) {
      setError(e.message || `Failed to sign up with ${providerName}`);
      setSocialLoading(null);
    }
  };

  const handleTelegramAuth = async (user: any) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch('/api/auth/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Telegram authentication failed');
      }

      // We have the magic link token, verify it
      const supabase = createClient();
      const { error } = await supabase.auth.verifyOtp({
        token_hash: data.token,
        type: 'magiclink'
      });

      if (error) {
        throw error;
      }
      
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "An error occurred during Telegram sign up.");
      setLoading(false);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setError(error.message);
      } else {
        setError("Please check your email for the confirmation link.");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during sign up.");
    } finally {
      setLoading(false);
    }
  };
  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!phone) {
      setError("Please enter your mobile number.");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        phone,
      });

      if (error) {
        setError(error.message);
      } else {
        setAuthMode("verify");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!otp) {
      setError("Please enter the 6-digit code.");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.verifyOtp({
        phone,
        token: otp,
        type: 'sms',
      });

      if (error) {
        setError(error.message);
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during verification.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex gradient-bg-hero grid-pattern relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            top: "-5%",
            right: "-5%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-float"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
            bottom: "5%",
            left: "-5%",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Left branding panel (desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-md"
        >
          <Link href="/" className="flex items-center gap-2.5 mb-10 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Creator<span className="gradient-text-primary">OS</span>
            </span>
          </Link>

          <h1 className="text-4xl font-bold leading-tight mb-4">
            Start building your{" "}
            <span className="gradient-text">AI content empire</span>
          </h1>

          <p className="text-muted leading-relaxed mb-10">
            Create your free account and get instant access to AI-powered
            content creation, image synthesis, video generation, and more.
          </p>

          {/* What you get */}
          <div className="glass rounded-xl p-5 space-y-3">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
              Free plan includes
            </p>
            {[
              "1 Brand workspace",
              "50 AI generations per month",
              "Basic analytics dashboard",
              "Community support",
              "3 scheduled posts",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-2.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm text-text-secondary">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-8 lg:hidden">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">
              Creator<span className="gradient-text-primary">OS</span>
            </span>
          </Link>

          {/* Form card */}
          <div className="glass-strong rounded-2xl p-8 shadow-2xl shadow-black/30">
            <h2 className="text-2xl font-bold mb-1">Create your account</h2>
            <p className="text-sm text-muted mb-6">
              Already have an account?{" "}
              <Link href="/login" className="text-primary-light hover:text-primary font-medium transition-colors">
                Log in
              </Link>
            </p>

            {/* Social signup buttons — responsive grid */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {socialProviders.map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  onClick={() => {
                    if (provider.id === 'phone') {
                      setAuthMode('phone');
                    } else {
                      handleSocialSignup(provider.name);
                    }
                  }}
                  disabled={socialLoading !== null}
                  id={`signup-${provider.id}`}
                  className="flex items-center justify-center py-2.5 rounded-xl glass text-sm font-medium text-text-secondary hover:text-text hover:border-border-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  title={`Continue with ${provider.name}`}
                >
                  {socialLoading === provider.name ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    provider.icon
                  )}
                </button>
              ))}
            </div>

            <div className="mb-6 flex justify-center w-full">
              <TelegramLoginWidget 
                botName={process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME || "CreatorOSAuthBot"} 
                onAuth={handleTelegramAuth} 
              />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-dark">or sign up with email</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 px-4 py-3 rounded-xl bg-error/10 border border-error/20 text-sm text-error"
              >
                {error}
              </motion.div>
            )}            {/* Email form */}
            {authMode === "email" && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-text-secondary">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder:text-muted-dark text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="signup-email" className="block text-sm font-medium mb-1.5 text-text-secondary">
                    Email address
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder:text-muted-dark text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium mb-1.5 text-text-secondary">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 6 characters"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder:text-muted-dark text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all pr-11"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-dark hover:text-muted transition-colors"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {/* Password strength */}
                  {password.length > 0 && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 flex gap-1">
                        {[1, 2, 3].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-all ${
                              passwordStrength.level >= level
                                ? passwordStrength.color
                                : "bg-border"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-dark">{passwordStrength.label}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  id="signup-submit"
                  className="w-full py-3 rounded-xl gradient-primary text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Creating account...
                    </>
                  ) : (
                    "Create account"
                  )}
                </button>
              </form>
            )}

            {/* Phone form */}
            {authMode === "phone" && (
              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary">
                      Mobile Number
                    </label>
                    <button type="button" onClick={() => setAuthMode('email')} className="text-xs text-primary-light hover:text-primary transition-colors">
                      Use Email instead
                    </button>
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder:text-muted-dark text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl gradient-primary text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : "Send Verification Code"}
                </button>
              </form>
            )}

            {/* Verify OTP form */}
            {authMode === "verify" && (
              <form onSubmit={handleVerifySubmit} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="otp" className="block text-sm font-medium text-text-secondary">
                      Verification Code
                    </label>
                    <button type="button" onClick={() => setAuthMode('phone')} className="text-xs text-primary-light hover:text-primary transition-colors">
                      Change number
                    </button>
                  </div>
                  <input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text placeholder:text-muted-dark text-sm outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all text-center tracking-widest font-mono text-lg"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl gradient-primary text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? "Verifying..." : "Verify & Sign Up"}
                </button>
              </form>
            )}
          </div>

          <p className="text-center text-xs text-muted-dark mt-6">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-muted hover:text-text transition-colors">Terms</Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-muted hover:text-text transition-colors">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
