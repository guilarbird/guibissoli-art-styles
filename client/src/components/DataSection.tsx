import { motion } from 'framer-motion';
import MetricCard from './MetricCard';
import { TrendingUp, Users, DollarSign, Building2 } from 'lucide-react';

export default function DataSection() {
  const metrics = [
    { label: 'OTC Volume', value: 144850000, prefix: '$', change: '+1,688% YoY', icon: TrendingUp },
    { label: 'Gross Revenue', value: 319200, prefix: '$', change: '+1,683% YoY', icon: DollarSign },
    { label: 'Net Profit', value: 288409, prefix: '$', change: '+1,680% YoY', icon: DollarSign },
    { label: 'B2B Clients', value: 65, change: '+442% YoY', icon: Building2 },
    { label: 'Platform Users', value: 1739, change: 'New Metric', changeType: 'neutral' as const, icon: Users },
    { label: 'Net Margin', value: 0.226, suffix: '%', change: '+2.7% YoY', icon: TrendingUp },
  ];

  return (
    <section className="py-24 relative">
      {/* Section Header */}
      <div className="container mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary to-transparent" />
          <span className="text-xs uppercase tracking-widest text-primary font-mono-data">01</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Key Metrics
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Our first full operational year delivered extraordinary results, 
          validating both our market thesis and operational model.
        </motion.p>
      </div>

      {/* Metrics Grid */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              change={metric.change}
              changeType={metric.changeType || 'positive'}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="container mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl overflow-hidden"
        >
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-semibold">Year-over-Year Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Metric</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">FY2024</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">FY2025</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">Growth</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">FY2026 Target</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'OTC Volume', fy24: '$8.1M', fy25: '$144.85M', growth: '+1,688%', target: '$200M' },
                  { metric: 'Gross Revenue', fy24: '$17,900', fy25: '$319,200', growth: '+1,683%', target: '$500K' },
                  { metric: 'Net Profit', fy24: '$16,200', fy25: '$288,409', growth: '+1,680%', target: '—' },
                  { metric: 'B2B Clients', fy24: '12', fy25: '65', growth: '+442%', target: '100' },
                  { metric: 'Monthly Volume', fy24: '$900K', fy25: '$12.1M', growth: '+1,244%', target: '—' },
                ].map((row, index) => (
                  <motion.tr
                    key={row.metric}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border/50 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 font-medium">{row.metric}</td>
                    <td className="p-4 text-right font-mono-data text-muted-foreground">{row.fy24}</td>
                    <td className="p-4 text-right font-mono-data text-foreground">{row.fy25}</td>
                    <td className="p-4 text-right font-mono-data text-green-400">{row.growth}</td>
                    <td className="p-4 text-right font-mono-data text-accent">{row.target}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
