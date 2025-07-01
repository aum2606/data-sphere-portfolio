
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 90 },
        { name: "SQL", level: 88 },
        { name: "JavaScript", level: 75 },
        { name: "Java", level: 70 },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", level: 92 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Keras", level: 88 },
        { name: "XGBoost", level: 90 },
      ]
    },
    {
      title: "Data Visualization",
      skills: [
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 88 },
        { name: "Plotly", level: 85 },
        { name: "Tableau", level: 82 },
        { name: "Power BI", level: 78 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Jupyter", level: 95 },
        { name: "Git", level: 88 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Spark", level: 72 },
      ]
    }
  ];

  const tools = [
    { name: "Python", icon: "🐍" },
    { name: "R", icon: "📊" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Jupyter", icon: "📓" },
    { name: "Git", icon: "🔧" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Tableau", icon: "📈" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in data science technologies, from statistical analysis to deep learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className="relative"
                        >
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            />
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Favorite Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="text-white font-medium text-sm">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
