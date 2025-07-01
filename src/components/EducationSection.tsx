
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Technology",
      period: "2022 - 2024",
      gpa: "3.9/4.0",
      description: "Advanced coursework in machine learning, statistical modeling, and big data analytics. Thesis on 'Deep Learning Applications in Predictive Healthcare Analytics'.",
      courses: [
        "Advanced Machine Learning",
        "Statistical Learning Theory",
        "Big Data Analytics",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Data Mining",
        "Bayesian Statistics"
      ],
      achievements: [
        "Dean's List (All Semesters)",
        "Graduate Research Assistant",
        "Best Thesis Award Nominee"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2018 - 2022",
      gpa: "3.7/4.0",
      description: "Strong foundation in computer science with specialization in data structures, algorithms, and software engineering. Minor in Mathematics.",
      courses: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering",
        "Linear Algebra",
        "Probability & Statistics",
        "Discrete Mathematics",
        "Computer Networks",
        "Operating Systems"
      ],
      achievements: [
        "Summa Cum Laude",
        "Computer Science Honor Society",
        "Outstanding Student Award"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-MLS-2023-001"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PDE-2023-002"
    },
    {
      title: "Microsoft Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "AZ-100-2022-003"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera (DeepLearning.AI)",
      date: "2022",
      credentialId: "DL-SPEC-2022-004"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic foundation and professional certifications in data science and related fields.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                            <p className="text-blue-400 font-semibold">{edu.institution}</p>
                          </div>
                          <div className="flex items-center gap-4 mt-2 md:mt-0">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                            <Badge className="bg-green-500/20 text-green-400">
                              GPA: {edu.gpa}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6">{edu.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-white font-semibold mb-3">Key Coursework</h5>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course) => (
                                <Badge
                                  key={course}
                                  variant="secondary"
                                  className="bg-white/10 text-gray-300 text-xs"
                                >
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-white font-semibold mb-3">Achievements</h5>
                            <div className="space-y-2">
                              {edu.achievements.map((achievement) => (
                                <div key={achievement} className="flex items-center gap-2">
                                  <Award className="w-4 h-4 text-yellow-400" />
                                  <span className="text-gray-300 text-sm">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-white font-bold mb-2">{cert.title}</h4>
                        <p className="text-blue-400 font-semibold mb-2">{cert.issuer}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">{cert.date}</span>
                          <Badge variant="outline" className="border-white/20 text-gray-300">
                            {cert.credentialId}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
