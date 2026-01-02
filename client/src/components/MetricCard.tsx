import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MetricCardProps {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  delay?: number;
}

export default function MetricCard({ 
  label, 
  value, 
  prefix = '', 
  suffix = '',
  change,
  changeType = 'positive',
  delay = 0 
}: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = typeof value === 'number' ? value : parseFloat(value.replace(/[^0-9.]/g, ''));

  useEffect(() => {
    const duration = 1500;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(numericValue * eased);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [numericValue, delay]);

  const formatValue = (val: number) => {
    if (val >= 1000000) {
      return (val / 1000000).toFixed(2) + 'M';
    } else if (val >= 1000) {
      return (val / 1000).toFixed(1) + 'K';
    }
    return val.toFixed(val % 1 === 0 ? 0 : 2);
  };

  const changeColors = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-muted-foreground'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      className="glass-card hud-corners p-6 scan-lines group hover:glow-cyan transition-all duration-300"
    >
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
        {label}
      </p>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold font-mono-data text-glow-cyan text-primary">
          {prefix}{formatValue(displayValue)}{suffix}
        </span>
      </div>
      {change && (
        <p className={`text-sm mt-2 font-mono-data ${changeColors[changeType]}`}>
          {change}
        </p>
      )}
    </motion.div>
  );
}
