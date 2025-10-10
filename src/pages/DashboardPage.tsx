import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Users, 
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Cloud,
  Droplets,
  TreePine,
  Zap
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      title: 'Active Projects',
      value: '12',
      change: '+3',
      changeType: 'positive',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Models Running',
      value: '47',
      change: '+8',
      changeType: 'positive',
      icon: Activity,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data Points Processed',
      value: '2.4M',
      change: '+12%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Global Impact Score',
      value: '94%',
      change: '+2%',
      changeType: 'positive',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const alerts = [
    {
      type: 'warning',
      message: 'Flood risk detected in Tana River Basin',
      time: '2 minutes ago',
      icon: AlertTriangle,
      color: 'text-warning'
    },
    {
      type: 'success',
      message: 'Mathenge detection model updated successfully',
      time: '15 minutes ago',
      icon: CheckCircle,
      color: 'text-success'
    },
    {
      type: 'info',
      message: 'New data batch processed from Sentinel-2',
      time: '1 hour ago',
      icon: Cloud,
      color: 'text-info'
    }
  ];

  const projectStatus = [
    {
      name: 'ASAL Platform',
      progress: 75,
      status: 'Active',
      lastUpdate: '2 minutes ago',
      icon: Globe
    },
    {
      name: 'Mathenge Detection',
      progress: 60,
      status: 'Active',
      lastUpdate: '5 minutes ago',
      icon: TreePine
    },
    {
      name: 'Flood Warning',
      progress: 80,
      status: 'Active',
      lastUpdate: '1 minute ago',
      icon: Droplets
    },
    {
      name: 'Cow Recognition',
      progress: 45,
      status: 'Development',
      lastUpdate: '30 minutes ago',
      icon: Users
    }
  ];

  const environmentalData = [
    {
      metric: 'Vegetation Health (NDVI)',
      value: '0.73',
      unit: 'index',
      trend: 'up',
      icon: TreePine,
      color: 'text-success'
    },
    {
      metric: 'Water Quality Index',
      value: '8.2',
      unit: '/10',
      trend: 'up',
      icon: Droplets,
      color: 'text-info'
    },
    {
      metric: 'Soil Moisture',
      value: '45%',
      unit: 'capacity',
      trend: 'down',
      icon: Cloud,
      color: 'text-warning'
    },
    {
      metric: 'Temperature',
      value: '28.5°C',
      unit: 'average',
      trend: 'stable',
      icon: Activity,
      color: 'text-text-light'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-dark-gray bg-opacity-20">
      {/* Header */}
      <section className="py-8 border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-text-light">AURA Intelligence Dashboard</h1>
              <p className="text-text-gray mt-1">Real-time monitoring and analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-success animate-pulse' : 'bg-error'}`}></div>
                <span className="text-sm text-text-gray">{isLive ? 'Live' : 'Offline'}</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-text-light font-mono">
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="text-xs text-text-gray">
                  {currentTime.toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center space-x-1 text-sm ${
                      stat.changeType === 'positive' ? 'text-success' : 'text-error'
                    }`}>
                      {stat.changeType === 'positive' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-text-light mb-1">{stat.value}</div>
                  <div className="text-sm text-text-gray">{stat.title}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-text-light">Project Status</h2>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-accent-teal" />
                    <span className="text-sm text-text-gray">Real-time</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {projectStatus.map((project, index) => {
                    const Icon = project.icon;
                    return (
                      <div key={project.name} className="border border-white border-opacity-10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Icon className="w-5 h-5 text-accent-teal" />
                            <span className="font-semibold text-text-light">{project.name}</span>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs ${
                            project.status === 'Active' 
                              ? 'bg-success bg-opacity-20 text-success' 
                              : 'bg-warning bg-opacity-20 text-warning'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-text-gray">Progress</span>
                          <span className="text-sm text-text-light">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-dark-gray rounded-full h-2 mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="h-2 bg-gradient-to-r from-accent-teal to-accent-orange rounded-full"
                          ></motion.div>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-text-gray">
                          <Clock className="w-3 h-3" />
                          <span>Last update: {project.lastUpdate}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Alerts & Environmental Data */}
            <div className="space-y-8">
              {/* Alerts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <h2 className="text-xl font-bold text-text-light mb-6">System Alerts</h2>
                <div className="space-y-4">
                  {alerts.map((alert, index) => {
                    const Icon = alert.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-dark-gray bg-opacity-30 rounded-lg">
                        <Icon className={`w-5 h-5 ${alert.color} flex-shrink-0 mt-0.5`} />
                        <div className="flex-1">
                          <p className="text-sm text-text-light">{alert.message}</p>
                          <p className="text-xs text-text-gray mt-1">{alert.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Environmental Data */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6"
              >
                <h2 className="text-xl font-bold text-text-light mb-6">Environmental Data</h2>
                <div className="space-y-4">
                  {environmentalData.map((data, index) => {
                    const Icon = data.icon;
                    return (
                      <div key={data.metric} className="flex items-center justify-between p-3 bg-dark-gray bg-opacity-30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon className={`w-5 h-5 ${data.color}`} />
                          <div>
                            <div className="text-sm text-text-light">{data.metric}</div>
                            <div className="text-xs text-text-gray">{data.unit}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-text-light">{data.value}</div>
                          <div className="flex items-center space-x-1">
                            {data.trend === 'up' && <TrendingUp className="w-3 h-3 text-success" />}
                            {data.trend === 'down' && <TrendingDown className="w-3 h-3 text-warning" />}
                            {data.trend === 'stable' && <Activity className="w-3 h-3 text-info" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Visualization Placeholder */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text-light">Global Monitoring Map</h2>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-accent-teal" />
                <span className="text-sm text-text-gray">Live satellite data</span>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-deep-blue to-dark-gray rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-orange opacity-10"></div>
              <div className="text-center z-10">
                <Globe className="w-16 h-16 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-text-light mb-2">Interactive GeoAI Map</h3>
                <p className="text-text-gray">Real-time environmental monitoring across global locations</p>
                <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-text-gray">Active monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
                    <span className="text-text-gray">Alert zones</span>
                  </div>
                </div>
              </div>
              
              {/* Animated particles */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-accent-teal rounded-full opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
