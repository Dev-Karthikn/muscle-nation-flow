import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dumbbell,
  Users,
  Calendar,
  Trophy,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import { AuthModal } from "@/components/AuthModal";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const handleAuthClick = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Member Management",
      description:
        "Complete member profiles with progress tracking and personalized workout plans",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Class Scheduling",
      description:
        "Advanced booking system for group classes and personal training sessions",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Performance Tracking",
      description:
        "Real-time analytics and progress monitoring for all members",
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Equipment Management",
      description:
        "Track equipment usage, maintenance schedules, and availability",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      features: ["Gym Access", "Locker Room", "Basic Equipment", "Mobile App"],
      popular: false,
    },
    {
      name: "Premium",
      price: "$59",
      period: "/month",
      features: [
        "All Basic Features",
        "Group Classes",
        "Personal Trainer (2/month)",
        "Nutrition Guidance",
        "Priority Booking",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      features: [
        "All Premium Features",
        "Unlimited Personal Training",
        "VIP Locker",
        "Massage Therapy",
        "Custom Meal Plans",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center space-x-2">
          <Dumbbell className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">MuscleNation</span>
        </div>
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:text-purple-400 hover:bg-white/10"
            onClick={() => handleAuthClick("login")}
          >
            Login
          </Button>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            onClick={() => handleAuthClick("signup")}
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300">
            <Star className="h-4 w-4 mr-2" />
            Premium Gym Management Platform
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            MuscleNation
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your fitness journey with our cutting-edge gym management
            system. Track progress, book classes, and achieve your goals with
            personalized training programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg hover-scale"
              onClick={() => handleAuthClick("signup")}
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-black hover:bg-white/50 px-8 py-4 text-lg hover-scale"
              onClick={() => handleAuthClick("login")}
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your fitness journey and gym
              operations in one comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover-scale"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 text-purple-400">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Membership Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan that fits your fitness goals and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-white/5 backdrop-blur-md border transition-all duration-300 hover-scale ${
                  plan.popular
                    ? "border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-pink-500/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-white text-2xl">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  <Button
                    className={`w-full mt-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "bg-white/10 hover:bg-white/20 border border-white/20"
                    } text-white`}
                    onClick={() => handleAuthClick("signup")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Dumbbell className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">MuscleNation</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering fitness journeys with cutting-edge technology and
            personalized training programs.
          </p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>

      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;
