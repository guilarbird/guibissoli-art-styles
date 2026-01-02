import { motion } from 'framer-motion';
import { Check, Clock, Calendar, Target, Shield, Cpu, Users, Globe } from 'lucide-react';

const milestones = [
  { 
    title: 'VASP Application Preparation', 
    status: 'complete', 
    icon: Shield,
    description: 'Full documentation and compliance framework ready'
  },
  { 
    title: 'AML/KYC Framework', 
    status: 'complete', 
    icon: Check,
    description: 'Operational and compliant with local regulations'
  },
  { 
    title: 'Lambda Stack Documentation', 
    status: 'complete', 
    icon: Cpu,
    description: '63 functions mapped and documented'
  },
  { 
    title: 'IP License Documentation', 
    status: 'in-progress', 
    icon: Clock,
    description: 'Target: Q1 2026'
  },
  { 
    title: 'COSIF Accounting Remediation', 
    status: 'in-progress', 
    icon: Clock,
    description: 'Target: Q2 2026'
  },
  { 
    title: 'Microservices Migration', 
    status: 'planned', 
    icon: Calendar,
    description: 'Q2 2026 target'
  },
];

const targets2026 = [
  { metric: 'OTC Volume', current: '$144.85M', target: '$200M', growth: '+38%', icon: Target },
  { metric: 'Gross Revenue', current: '$319K', target: '$500K', growth: '+57%', icon: Target },
  { metric: 'B2B Clients', current: '65', target: '100', growth: '+54%', icon: Users },
  { metric: 'Net Margin', current: '0.226%', target: '0.25%', growth: '+11%', icon: Target },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    complete: 'bg-green-500/20 text-green-400 border-green-500/30',
    'in-progress': 'bg-primary/20 text-primary border-primary/30',
    planned: 'bg-muted text-muted-foreground border-border',
  };

  const labels = {
    complete: 'Complete',
    'in-progress': 'In Progress',
    planned: 'Planned',
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full border ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  );
};

export default function StrategySection() {
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
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-green-500 to-transparent" />
          <span className="text-xs uppercase tracking-widest text-green-500 font-mono-data">03</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Strategy & Roadmap
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Building sustainable infrastructure for long-term growth while navigating 
          Brazil's evolving regulatory landscape.
        </motion.p>
      </div>

      <div className="container">
        {/* Milestones Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Globe className="text-primary" size={24} />
              Strategic Milestones
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    milestone.status === 'complete' ? 'bg-green-500/20' :
                    milestone.status === 'in-progress' ? 'bg-primary/20' : 'bg-muted'
                  }`}>
                    <milestone.icon size={20} className={
                      milestone.status === 'complete' ? 'text-green-400' :
                      milestone.status === 'in-progress' ? 'text-primary' : 'text-muted-foreground'
                    } />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-medium">{milestone.title}</h4>
                      <StatusBadge status={milestone.status} />
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FY2026 Targets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Target className="text-accent" size={24} />
              FY2026 Targets
            </h3>
            <div className="space-y-6">
              {targets2026.map((target, index) => (
                <motion.div
                  key={target.metric}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{target.metric}</span>
                    <span className="text-sm font-mono-data text-green-400">{target.growth}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono-data text-muted-foreground">{target.current}</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '70%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                    <span className="font-mono-data text-accent font-semibold">{target.target}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Strategic Priorities */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold mb-4">Strategic Priorities</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'IP License Q1',
                  'VASP Registration Q2',
                  'Tech Modernization',
                  'Client Expansion',
                ].map((priority, index) => (
                  <motion.div
                    key={priority}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm text-center"
                  >
                    {priority}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-8 md:p-12 text-center hud-corners glow-cyan"
        >
          <blockquote className="text-xl md:text-2xl font-light text-foreground mb-6 max-w-3xl mx-auto">
            "FY2025 has validated our market thesis and operational model. We have built 
            the foundation for sustainable growth while navigating significant regulatory 
            and operational challenges."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/images/ai_host_avatar.png" 
              alt="Guilherme Nicode"
              className="w-12 h-12 rounded-full border-2 border-primary/50"
            />
            <div className="text-left">
              <p className="font-semibold">Guilherme Nicode</p>
              <p className="text-sm text-muted-foreground">Country Owner, Coins.xyz Brazil</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
