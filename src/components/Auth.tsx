import React, { useState, useEffect } from "react";
import { cn } from "../utils/cn";

interface AuthProps {
  onAuthenticated: () => void;
  passwordHash?: string;
  appName?: string;
}

export const Auth: React.FC<AuthProps> = ({
  onAuthenticated,
  passwordHash = import.meta.env.VITE_AUTH_PASSWORD,
  appName = import.meta.env.VITE_APP_NAME,
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Agregar pequeña animación de entrada
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password === passwordHash) {
      // Guardar autenticación en sessionStorage
      sessionStorage.setItem("flowy_authenticated", "true");
      sessionStorage.setItem("flowy_auth_time", Date.now().toString());
      onAuthenticated();
    } else {
      setError("Contraseña incorrecta");
      setPassword("");
    }
  };

  return (
    <div
      className={cn(
        "fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="w-full max-w-md px-6">
        <div
          className={cn(
            "bg-white rounded-2xl shadow-2xl p-8 space-y-6 transform transition-all duration-500",
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
        >
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">
              {appName || "Flowy UI Kit"}
            </h1>
            <p className="text-slate-600 text-sm">
              Ingresa la contraseña para acceder
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Ingresa la contraseña"
                className={cn(
                  "w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200",
                  "placeholder-slate-400 text-slate-900",
                  "focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200",
                  error
                    ? "border-red-500 bg-red-50"
                    : "border-slate-200 bg-slate-50"
                )}
                autoFocus
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm font-medium text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!password}
              className={cn(
                "w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2",
                password
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg hover:shadow-amber-500/50 cursor-pointer"
                  : "bg-slate-200 text-slate-500 cursor-not-allowed"
              )}
            >
              <span>Acceder</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </form>

          {/* Footer Info */}
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-center text-slate-500">
              Este sitio está protegido por contraseña.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Acceso seguro • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
