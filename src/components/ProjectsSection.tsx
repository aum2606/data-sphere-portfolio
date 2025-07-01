
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model to predict customer churn using ensemble methods and feature engineering. Achieved 94% accuracy with Random Forest and XGBoost.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
      github: "#",
      demo: "#",
      category: "Machine Learning"
    },
    {
      title: "Real-time Stock Market Dashboard",
      description: "Interactive dashboard for real-time stock market analysis with predictive modeling and sentiment analysis from social media data.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      technologies: ["Python", "Streamlit", "Yahoo Finance API", "LSTM", "TextBlob"],
      github: "#",
      demo: "#",
      category: "Data Visualization"
    },
    {
      title: "E-commerce Recommendation System",
      description: "Collaborative filtering recommendation system using matrix factorization and deep learning to suggest products to users.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Surprise", "Flask", "MongoDB"],
      github: "#",
      demo: "#",
      category: "Deep Learning"
    },
    {
      title: "COVID-19 Impact Analysis",
      description: "Statistical analysis of COVID-19's impact on global economies using time series analysis and geospatial visualization.",
      image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=600&h=400&fit=crop",
      technologies: ["R", "ggplot2", "Plotly", "Time Series", "Folium"],
      github: "#",
      demo: "#",
      category: "Statistical Analysis"
    },
    {
      title: "Natural Language Processing Sentiment Analyzer",
      description: "Multi-class sentiment analysis of product reviews using BERT and traditional NLP techniques with 92% accuracy.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["Python", "BERT", "Transformers", "NLTK", "Streamlit"],
      github: "#",
      demo: "#",
      category: "NLP"
    },
    {
      title: "Fraud Detection System",
      description: "Anomaly detection system for credit card fraud using isolation forests and neural networks with real-time processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["Python", "Keras", "Isolation Forest", "Apache Kafka", "Docker"],
      github: "#",
      demo: "#",
      category: "Anomaly Detection"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my data science projects demonstrating expertise in machine learning, 
            statistical analysis, and data visualization.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-blue-500/80 text-white">
                    {project.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary" 
                        className="bg-white/10 text-gray-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-white/20 text-white hover:bg-white/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
