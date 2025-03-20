import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Wallet, BarChart3, Layers, Workflow, ArrowRight, Shield, 
  Zap, Globe, PieChart, Users, Building2, CreditCard, 
  LineChart, AlertTriangle, ShoppingBag, Repeat, Mail, Phone, MapPin,
  Code, Terminal, Database, Lock, Cpu, GitBranch, Calculator, Coins,
  Network, Landmark, Boxes, Puzzle, Lightbulb, Gauge, Banknote, Fingerprint
} from 'lucide-react';


import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PricingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

function App() {
  const [formStatus, setFormStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [consultationDate, setConsultationDate] = useState('');
  const [consultationTime, setConsultationTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.pageYOffset * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus('sending');
    emailjs.sendForm('service_t7qbopm', 'template_eijmb1h', formRef.current, 'sToey7nNLg-wWonWO')
      .then(() => {
        setFormStatus('success');
        if (formRef.current) formRef.current.reset();
      })
      .catch(() => {
        setFormStatus('error');
      });
  };

  const scheduleConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle consultation scheduling
    setFormStatus('consultation-success');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Parallax */}
      <div className="relative overflow-hidden h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center transform"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&w=2000&q=80')",
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-2 bg-purple-600/30 rounded-full text-purple-300 text-sm font-medium mb-4 animate-pulse">
              Revolutionizing AI Financial Management
            </div>
            <h1 className="text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CashCached
            </h1>
            <p className="text-4xl text-white mb-8 font-light">
              Transforming Payments in the AI-driven Economy
            </p>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              The unified AI fund management platform that simplifies how companies allocate, track, and audit funds across multiple AI services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                <div className="text-2xl font-bold text-purple-400 mb-1">35%</div>
                <div className="text-gray-300 text-sm">Average Cost Reduction</div>
              </div>
              <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                <div className="text-2xl font-bold text-purple-400 mb-1">10+</div>
                <div className="text-gray-300 text-sm">AI Services Integrated</div>
              </div>
              <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                <div className="text-2xl font-bold text-purple-400 mb-1">15hrs</div>
                <div className="text-gray-300 text-sm">Weekly Time Saved</div>
              </div>
            </div>
            
            <div className="flex gap-6 justify-center">
              <a 
                href="https://vora-dashboard.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center"
              >
                Try Vora Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="border-2 border-purple-500 hover:border-purple-400 text-white font-bold py-4 px-10 rounded-full transition-all hover:bg-purple-500/10 flex items-center">
                Watch Demo
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-12 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300">AI Payments Processed</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section Header */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-500">
            <div className="inline-block p-2 bg-purple-600/20 rounded-xl mb-6">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-white bg-clip-text text-transparent p-4">
                Our Products
              </h2>
            </div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed">
              CashCached offers a suite of powerful products designed to revolutionize AI fund management and payments.
            </p>
          </div>
        </div>
      </div>

      {/* Vora Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-purple-900/10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Vora
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship product enables companies to allocate AI funds from a central wallet to different AI models and services while tracking expenditure and performance through a unified interface.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
                alt="Vora Dashboard Preview" 
                className="rounded-xl shadow-2xl border border-purple-500/20"
              />
            </div>
            <div className="space-y-8">
              <FeatureItem
                icon={<Wallet className="w-6 h-6" />}
                title="Wallet Creation and Management"
                description="Create and manage multiple wallets for different AI services and departments with ease."
              />
              <FeatureItem
                icon={<BarChart3 className="w-6 h-6" />}
                title="Fund Allocation across AI services"
                description="Allocate funds strategically across multiple AI models and services from a central interface."
              />
              <FeatureItem
                icon={<LineChart className="w-6 h-6" />}
                title="Transaction-Based KPI Tracking"
                description="Monitor cost-per-call, usage trends, and performance metrics in real-time."
              />
              <FeatureItem
                icon={<PieChart className="w-6 h-6" />}
                title="Unified Expense Dashboard"
                description="Get a comprehensive view of all your AI expenditures in one place."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 space-y-8">
              <FeatureItem
                icon={<Gauge className="w-6 h-6" />}
                title="Real-Time Fund Tracking"
                description="Track your AI spending in real-time with detailed analytics and insights."
              />
              <FeatureItem
                icon={<Database className="w-6 h-6" />}
                title="Exportable Reports"
                description="Generate and export detailed reports for accounting and analysis."
              />
              <FeatureItem
                icon={<Lock className="w-6 h-6" />}
                title="Role-Based Access Control"
                description="Secure your financial data with granular access controls for team members."
              />
              <FeatureItem
                icon={<AlertTriangle className="w-6 h-6" />}
                title="Anomaly Detection"
                description="Get instant alerts for unusual spending patterns and potential cost overruns."
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-200 mb-4">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Automated Workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LineChart className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Advanced Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Secure Authentication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Data Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Compliance Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Fast Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Global Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://vora-dashboard.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center"
            >
              Try Vora Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Mosaic Section */}
      <div className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Mosaic
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A custom pricing plan generator that dynamically creates pricing packages for individuals or companies based on the AI agent's use case and model distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80" 
                alt="Mosaic Preview" 
                className="rounded-xl shadow-2xl border border-purple-500/20"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-purple-200">Workflow</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Input AI Architecture</h4>
                    <p className="text-gray-400">User inputs their AI agent's architecture (e.g., 70% ChatGPT, 20% Grok, 10% Image Generation).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Calculate Expenditure</h4>
                    <p className="text-gray-400">Mosaic calculates the estimated expenditure based on usage patterns and model costs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Generate Custom Pricing Plan</h4>
                    <p className="text-gray-400">Custom pricing plan is generated automatically based on the specific needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Subscription Activation</h4>
                    <p className="text-gray-400">Subscription is activated through CashCached API with seamless integration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 mb-16">
            <h3 className="text-2xl font-bold text-purple-200 mb-4">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Workflow className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Smart Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Enhanced Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Smart Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Reliable Storage</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center">
              Try Mosaic
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              icon={<Users />}
              title="Individual"
              description="Perfect for freelancers and small projects"
              features={[
                "Single wallet",
                "Basic spend tracking",
                "Monthly budget cap",
                "Email support",
                "API access"
              ]}
            />
            <PricingCard
              icon={<Building2 />}
              title="Business"
              description="Ideal for growing companies"
              features={[
                "Multiple wallets",
                "KPI dashboard",
                "Role-based access",
                "Priority support",
                "Audit logs",
                "Custom integrations"
              ]}
              highlighted={true}
            />
            <PricingCard
              icon={<CreditCard />}
              title="Enterprise"
              description="For large organizations"
              features={[
                "Custom integrations",
                "Advanced governance",
                "Custom KPI framework",
                "Dedicated support",
                "SLA guarantee",
                "White-label solution"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Flow Section */}
      <div className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Flow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A unified payment API that connects existing UPI wallets (Google Pay, PhonePe, Paytm, etc.) to AI platforms, simplifying payments for AI services while avoiding residue funds across platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80" 
                alt="Flow Preview" 
                className="rounded-xl shadow-2xl border border-purple-500/20"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-purple-200 mb-6">Workflow</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Connect UPI Wallet</h4>
                    <p className="text-gray-400">User connects their UPI wallet to CashCached API with secure authentication.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Unified Payments</h4>
                    <p className="text-gray-400">Payments to any AI platform are automatically deducted from the unified wallet.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Centralized Balance</h4>
                    <p className="text-gray-400">Remaining balance is always centralized in CashCached, not scattered across multiple platforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 mb-16">
            <h3 className="text-2xl font-bold text-purple-200 mb-4">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-purple-900/30 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Banknote className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-semibold text-purple-200">No Residue Funds</h4>
                </div>
                <p className="text-gray-400">Eliminate wasted funds scattered across multiple AI platforms.</p>
              </div>
              <div className="p-4 bg-purple-900/30 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-semibold text-purple-200">Simplified Payments</h4>
                </div>
                <p className="text-gray-400">One-click payments to any AI service without platform-specific wallets.</p>
              </div>
              <div className="p-4 bg-purple-900/30 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Fingerprint className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-semibold text-purple-200">Secure Transactions</h4>
                </div>
                <p className="text-gray-400">Enterprise-grade security for all your payment information.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center">
              Try Flow
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Nexus Section */}
      <div className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Nexus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              An autonomous financial infrastructure that enables Agentic AI systems to independently handle and allocate funds across multiple AI services, optimizing resource distribution without human intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 space-y-8">
              <h3 className="text-2xl font-bold text-purple-200 mb-6">Workflow</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Agentic System Initialization</h4>
                    <p className="text-gray-400">System initializes autonomous AI agents with fund management capabilities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Autonomous Resource Distribution</h4>
                    <p className="text-gray-400">Agentic AI autonomously allocates resources across different AI services based on priorities and needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Intelligent API Management</h4>
                    <p className="text-gray-400">Agentic AI systems independently interact with various AI services through secure API connections.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200">Automated Performance Optimization</h4>
                    <p className="text-gray-400">Agentic AI continuously optimizes resource allocation based on performance metrics and usage patterns.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" 
                alt="Nexus Preview" 
                className="rounded-xl shadow-2xl border border-purple-500/20"
              />
            </div>
          </div>

          <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 mb-16">
            <h3 className="text-2xl font-bold text-purple-200 mb-4">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Budget Control</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Secure Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Performance Metrics</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 flex items-center">
              Try Nexus
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading companies are transforming their AI payment infrastructure with CashCached
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80" 
                alt="AI Startup Case Study" 
                className="rounded-xl shadow-2xl border border-purple-500/20"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-600/20 rounded-full text-purple-300 text-sm font-medium mb-2">
                Case Study: AI Startup
              </div>
              <h3 className="text-3xl font-bold text-purple-200">How TechMinds AI Reduced Costs by 40%</h3>
              <p className="text-gray-300">
                TechMinds AI, a growing startup with 50+ employees, was struggling with managing payments across multiple AI services. Their finance team spent hours each week reconciling expenses and dealing with residue funds.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="text-xl font-bold text-purple-200 mb-2">Challenge</h4>
                  <p className="text-gray-400">Managing payments across 7 different AI platforms with no centralized tracking</p>
                </div>
                <div className="bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="text-xl font-bold text-purple-200 mb-2">Solution</h4>
                  <p className="text-gray-400">Implemented Vora Dashboard and Flow to centralize all AI payments</p>
                </div>
                <div className="bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="text-xl font-bold text-purple-200 mb-2">Results</h4>
                  <p className="text-gray-400">40% cost reduction and 15 hours saved weekly on financial management</p>
                </div>
                <div className="bg-purple-900/30 p-4 rounded-lg">
                  <h4 className="text-xl font-bold text-purple-200 mb-2">ROI</h4>
                  <p className="text-gray-400">$45,000 annual savings with complete implementation in just 2 weeks</p>
                </div>
              </div>
              <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                Read full case study
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Schedule Consultation Section */}
      <div className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Schedule a Free Consultation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let our experts show you how CashCached can transform your AI payment infrastructure.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={scheduleConsultation} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="consultation_name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="consultation_name"
                    name="consultation_name"
                    required
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="consultation_email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="consultation_email"
                    name="consultation_email"
                    required
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="consultation_date" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="consultation_date"
                    name="consultation_date"
                    required
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    value={consultationDate}
                    onChange={(e) => setConsultationDate(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="consultation_time" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="consultation_time"
                    name="consultation_time"
                    required
                    className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    value={consultationTime}
                    onChange={(e) => setConsultationTime(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="consultation_message" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="consultation_message"
                  name="consultation_message"
                  rows={4}
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Brief description of your requirements"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about CashCached? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Email Us</h3>
                  <p className="text-gray-400">cashcach3@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-gray-400">123 AI Street, Tech Valley</p>
                </div>
              </div>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  required
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Product Comparison Section */}
      <div className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Our Product Ecosystem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CashCached offers a comprehensive suite of products designed to work together or independently to solve your AI payment challenges.
            </p>
          </div>
          
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-purple-300 font-bold border-b border-purple-500/30">Features</th>
                  <th className="p-4 text-center text-purple-300 font-bold border-b border-purple-500/30">Vora Dashboard</th>
                  <th className="p-4 text-center text-purple-300 font-bold border-b border-purple-500/30">Mosaic</th>
                  <th className="p-4 text-center text-purple-300 font-bold border-b border-purple-500/30">Flow</th>
                  <th className="p-4 text-center text-purple-300 font-bold border-b border-purple-500/30">Nexus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-purple-500/20 text-gray-300">Primary Use Case</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Fund Management & Analytics</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Custom Pricing Generation</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Unified Payment Processing</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Agentic AI Fund Management</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-purple-500/20 text-gray-300">Best For</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Companies using multiple AI services</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">AI service providers</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">End users of AI platforms</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Enterprise organizations</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-purple-500/20 text-gray-300">Key Benefit</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Centralized expense tracking</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Automated pricing optimization</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Eliminates residue funds</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300">Autonomous AI fund allocation</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-purple-500/20 text-gray-300">Integration</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300"><span className="inline-block w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">✓</span></td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300"><span className="inline-block w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">✓</span></td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300"><span className="inline-block w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">✓</span></td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300"><span className="inline-block w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">✓</span></td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-purple-500/20 text-gray-300">API Access</td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300"><span className="inline-block w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">✓</span></td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300"><span className="inline-block w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">✓</span></td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300"><span className="inline-block w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">✓</span></td>
                  <td className="p-4 border-b border-purple-500/20 text-center text-gray-300"><span className="inline-block w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-200">Vora Dashboard</h3>
              <p className="text-gray-400 mb-4">Unified interface for AI fund management and allocation.</p>
              <a 
                href="https://vora-dashboard.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-200">Mosaic</h3>
              <p className="text-gray-400 mb-4">Custom pricing plan generator based on AI agent architecture.</p>
              <a 
                href="#mosaic" 
                className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-200">Nexus</h3>
              <p className="text-gray-400 mb-4">Financial infrastructure enabling Agentic AI to autonomously handle and allocate funds.</p>
              <a 
                href="#nexus" 
                className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-200">Flow</h3>
              <p className="text-gray-400 mb-4">Unified payment API connecting UPI wallets to AI platforms.</p>
              <a 
                href="#flow" 
                className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading AI companies and enterprises worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Sarah Johnson</h4>
                  <p className="text-gray-400">CTO, AI Innovations Inc.</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "CashCached's Vora Dashboard has revolutionized how we manage our AI expenditures. We've reduced wasted funds by 35% and gained unprecedented visibility into our AI costs."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Michael Chen</h4>
                  <p className="text-gray-400">CEO, NeuralTech Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The Mosaic pricing generator saved us countless hours of manual calculations. Now we can create custom pricing plans for our AI services in minutes instead of days."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-xl border border-purple-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 flex items-center justify-center mr-4">
                  <Landmark className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Emily Rodriguez</h4>
                  <p className="text-gray-400">CFO, Enterprise AI Corp</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Nexus has transformed how our Agentic AI systems autonomously manage funds across services. The real-time tracking and analytics have made our AI operations much more efficient and cost-effective."
              </p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-purple-900/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80" 
            alt="AI Technology" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Ready to Transform Your AI Payment Infrastructure?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join the financial revolution in AI services management with CashCached's comprehensive product suite.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-lg font-bold text-white mb-2">Quick Setup</div>
              <div className="text-gray-300 text-center">Be up and running in less than 2 weeks</div>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-lg font-bold text-white mb-2">Enterprise Security</div>
              <div className="text-gray-300 text-center">SOC 2 compliant with end-to-end encryption</div>
            </div>
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center mb-4">
                <Coins className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-lg font-bold text-white mb-2">Cost Savings</div>
              <div className="text-gray-300 text-center">Average 35% reduction in AI payment costs</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://vora-dashboard.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 flex items-center"
            >
              Try Vora Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button
              className="border-2 border-purple-500 hover:border-purple-400 text-white font-bold py-4 px-10 rounded-full transition-all hover:bg-purple-500/10 flex items-center"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-purple-200">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-purple-200">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({ icon, title, description, features, highlighted = false }: PricingCardProps) {
  return (
    <div className={`
      relative p-8 rounded-xl border 
      ${highlighted 
        ? 'border-purple-500 bg-gradient-to-b from-purple-900/50 to-black' 
        : 'border-purple-500/20 bg-gradient-to-b from-purple-900/30 to-black'}
    `}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
            Popular
          </span>
        </div>
      )}
      <div className={`
        w-16 h-16 mb-6 rounded-full flex items-center justify-center
        ${highlighted ? 'bg-purple-600/40' : 'bg-purple-600/20'}
      `}>
        <div className="text-purple-400">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-2 text-purple-200">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`
        w-full mt-8 py-3 px-6 rounded-full font-bold transition-all transform hover:scale-105
        ${highlighted 
          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
          : 'border-2 border-purple-500 hover:border-purple-400 text-white hover:bg-purple-500/10'}
      `}>
        Get Started
      </button>
    </div>
  );
}

export default App;