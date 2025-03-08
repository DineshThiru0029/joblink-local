
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Search, Briefcase, User, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/search', label: 'Find Jobs', icon: <Search className="w-5 h-5" /> },
    { path: '/my-jobs', label: 'My Jobs', icon: <Briefcase className="w-5 h-5" /> },
    { path: '/profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile top header */}
        <header 
          className={cn(
            "fixed top-0 left-0 right-0 h-16 z-50 px-4 flex items-center justify-between transition-all duration-200 backdrop-blur-lg",
            scrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
          )}
        >
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              WorkPart
            </span>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col pt-20 pb-6 px-6 animate-fade-in">
            <div className="flex-1">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center p-3 rounded-lg transition-all",
                      isActive(item.path)
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-secondary"
                    )}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-auto">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} WorkPart
              </div>
            </div>
          </div>
        )}

        {/* Mobile bottom navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg shadow-lg border-t border-border flex items-center justify-around h-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-1 px-3 transition-all",
                isActive(item.path)
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </nav>
      </>
    );
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 h-16 z-50 px-6 flex items-center justify-between transition-all duration-200 backdrop-blur-lg",
        scrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      )}
    >
      <Link to="/" className="flex items-center">
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          WorkPart
        </span>
      </Link>
      <nav className="flex items-center space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center px-4 py-2 rounded-md transition-all text-sm",
              isActive(item.path)
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-secondary"
            )}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
