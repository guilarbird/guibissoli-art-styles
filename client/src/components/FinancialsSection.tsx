import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const expenseData = [
  { name: 'Legal Fees', value: 48724, color: '#00D4FF' },
  { name: 'Accounting', value: 40469, color: '#00B4D8' },
  { name: 'Marketing', value: 37366, color: '#0096C7' },
  { name: 'Services', value: 28027, color: '#C9A227' },
  { name: 'Tax', value: 21145, color: '#B8860B' },
  { name: 'Events', value: 20916, color: '#10B981' },
  { name: 'Other', value: 52353, color: '#6B7280' },
];

const monthlyProfitData = [
  { month: 'Jan', profit: 15000 },
  { month: 'Feb', profit: 18000 },
  { month: 'Mar', profit: 22000 },
  { month: 'Apr', profit: 25000 },
  { month: 'May', profit: 28000 },
  { month: 'Jun', profit: 32000 },
  { month: 'Jul', profit: 38000 },
  { month: 'Aug', profit: 42000 },
  { month: 'Sep', profit: 48000 },
  { month: 'Oct', profit: 52000 },
  { month: 'Nov', profit: 55000 },
  { month: 'Dec', profit: 45000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 rounded-lg border border-border">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-primary font-mono-data">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function FinancialsSection() {
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
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-accent to-transparent" />
          <span className="text-xs uppercase tracking-widest text-accent font-mono-data">02</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Financial Performance
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Strategic investment in regulatory compliance while maintaining healthy margins 
          and sustainable growth trajectory.
        </motion.p>
      </div>

      {/* Charts Grid */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Profit Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-6">Monthly Profit Trend</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyProfitData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6B7280" 
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="#6B7280" 
                    fontSize={12}
                    tickLine={false}
                    tickFormatter={(value) => `$${value/1000}K`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="profit" 
                    fill="url(#barGradient)" 
                    radius={[4, 4, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D4FF" />
                      <stop offset="100%" stopColor="#0096C7" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Expense Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-6">Expense Distribution</h3>
            <div className="flex items-center gap-8">
              <div className="h-[250px] w-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-2">
                {expenseData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="font-mono-data">${(item.value / 1000).toFixed(1)}K</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* P&L Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl mt-8 overflow-hidden"
        >
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-semibold">Profit & Loss Summary</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { label: 'Gross Revenue', value: '$319,203', highlight: true },
              { label: 'Operating Expenses', value: '($249,000)', negative: true },
              { label: 'Net Operating Income', value: '$64,300' },
              { label: 'BRLA Investment', value: '$203,000', accent: true },
            ].map((item) => (
              <div key={item.label} className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className={`text-2xl font-bold font-mono-data ${
                  item.highlight ? 'text-primary' : 
                  item.negative ? 'text-red-400' : 
                  item.accent ? 'text-accent' : 'text-foreground'
                }`}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-primary/10 border-t border-primary/20">
            <p className="text-center text-sm">
              <span className="text-muted-foreground">Projected Year-End Position: </span>
              <span className="font-bold text-primary font-mono-data">$267,300</span>
            </p>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-xl border border-accent/30 bg-accent/5"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-accent text-lg">💡</span>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-1">Key Insight</h4>
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">44%</span> of total expenses ($109,338) represent 
                <span className="text-accent font-semibold"> Regulatory CAPEX</span>—strategic investment in our 
                VASP/IP licensing path that will unlock significant revenue opportunities in FY2026.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
