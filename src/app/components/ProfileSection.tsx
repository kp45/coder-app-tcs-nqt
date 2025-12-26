import { Trophy, Medal, Star, Share2, ExternalLink, TrendingUp, Award, BadgeCheck, Download, Brain, Code, Target, Users, Zap, Shield, Sparkles, ChevronRight, Check } from 'lucide-react';

interface ProfileSectionProps {
  onNavigate?: (tab: string) => void;
}

export function ProfileSection({ onNavigate }: ProfileSectionProps) {
  // Share profile function
  const handleShareProfile = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TCS NQT Achievement - Kiran Prajapati',
        text: 'Check out my TCS NQT scores! Top 1% in Reasoning Ability (97.5%) with 83.33% Advanced Section aggregate.',
        url: window.location.href,
      }).catch(() => {
        // Fallback: copy to clipboard
        copyToClipboard();
      });
    } else {
      // Fallback: copy to clipboard
      copyToClipboard();
    }
  };

  // Copy profile link to clipboard
  const copyToClipboard = () => {
    const profileText = `🏆 TCS NQT Achievement - Kiran Prajapati\n\n✅ Top 1% Nationwide - Reasoning: 97.5%\n✅ Advanced Section: 83.33%\n✅ Python Developer | NQT ID: NQT2010171719`;
    
    navigator.clipboard.writeText(profileText).then(() => {
      alert('✅ Profile details copied to clipboard!');
    }).catch(() => {
      alert('Unable to copy. Please try again.');
    });
  };

  // Download report function
  const handleDownloadReport = () => {
    // In a real app, this would download the PDF
    alert('📥 Your TCS NQT detailed scorecard is being prepared for download.\n\nThis would normally download:\n• Complete Score Report (PDF)\n• Psychometric Analysis\n• Certificate of Achievement');
  };

  // Navigate to bundle
  const handleGetStarted = () => {
    if (onNavigate) {
      onNavigate('bundle');
    }
  };

  return (
    <div className="space-y-5">
      {/* Header with Verification Badge */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6 shadow-2xl">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-xl ring-4 ring-white/20">
                KP
              </div>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  Kiran Prajapati
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </h1>
                <p className="text-xs text-blue-200">Python Developer</p>
              </div>
            </div>
            <button 
              onClick={handleShareProfile}
              className="p-2 bg-white/10 backdrop-blur-sm rounded-xl active:scale-95 transition-transform"
            >
              <Share2 className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              <p className="text-xs text-blue-200 mb-1">TCS iON NQT Certified</p>
              <p className="text-sm font-bold text-white">May 2023</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              <p className="text-xs text-blue-200 mb-1">Registration ID</p>
              <p className="text-sm font-bold text-white">NQT2010171719</p>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl" />
      </div>

      {/* Hero Stats - Crown Jewel */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 border-2 border-green-200 shadow-lg">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-4 shadow-lg">
            <Trophy className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">TOP 1% PERFORMER</span>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">🧠 Reasoning Ability</h2>
          
          {/* Circular Progress Ring */}
          <div className="relative w-48 h-48 mx-auto mb-4">
            <svg className="w-48 h-48 transform -rotate-90">
              {/* Background Circle */}
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="#e5e7eb"
                strokeWidth="16"
                fill="none"
              />
              {/* Progress Circle */}
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="url(#gradient)"
                strokeWidth="16"
                fill="none"
                strokeDasharray={`${(97.5 / 100) * 553} 553`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-5xl font-bold text-gray-900">97.5</span>
              <span className="text-xl text-gray-600">%</span>
              <span className="text-xs text-gray-500 mt-1">Top 1%</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-md border border-green-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Score Achieved</span>
              <span className="text-xl font-bold text-green-600">585.56 / 600</span>
            </div>
          </div>
        </div>

        {/* Advanced Section Badge */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white text-center shadow-lg">
          <p className="text-xs text-blue-100 mb-1">Advanced Section Aggregate</p>
          <p className="text-3xl font-bold">83.33%</p>
        </div>
      </div>

      {/* Cognitive Foundation Dashboard */}
      <div className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
        <div className="flex items-center gap-2 mb-5">
          <Brain className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-bold text-gray-900">Cognitive Foundation</h2>
          <span className="ml-auto text-sm font-bold text-blue-600">80.28%</span>
        </div>

        <div className="space-y-4">
          {/* Reasoning - Top Performer */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Reasoning Ability</span>
              </div>
              <span className="text-xl font-bold text-green-600">97.5%</span>
            </div>
            <div className="h-3 bg-green-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" style={{ width: '97.5%' }} />
            </div>
            <p className="text-xs text-green-700 mt-2 font-medium">📊 585.56/600 • Top 1% Performance</p>
          </div>

          {/* Numerical Ability */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900 text-sm">Numerical Ability</span>
              <span className="text-lg font-bold text-purple-600">74.2%</span>
            </div>
            <div className="h-2.5 bg-purple-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" style={{ width: '74.2%' }} />
            </div>
            <p className="text-xs text-purple-700 mt-1">445.40/600</p>
          </div>

          {/* Verbal Ability */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900 text-sm">Verbal Ability</span>
              <span className="text-lg font-bold text-blue-600">69.0%</span>
            </div>
            <div className="h-2.5 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style={{ width: '69%' }} />
            </div>
            <p className="text-xs text-blue-700 mt-1">414.02/600</p>
          </div>
        </div>
      </div>

      {/* Advanced Competency Section */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-5 border-2 border-orange-200 shadow-lg">
        <div className="flex items-center gap-2 mb-5">
          <Zap className="w-6 h-6 text-orange-600" />
          <h2 className="text-lg font-bold text-gray-900">Advanced Competency</h2>
          <span className="ml-auto text-sm font-bold text-orange-600">83.33%</span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-orange-200">
            <p className="text-xs text-gray-600 mb-2">Advanced Reasoning</p>
            <p className="text-3xl font-bold text-orange-600">83.3%</p>
            <p className="text-xs text-gray-500 mt-1">500.20/600</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-md border border-orange-200">
            <p className="text-xs text-gray-600 mb-2">Advanced Quant</p>
            <p className="text-3xl font-bold text-orange-600">83.2%</p>
            <p className="text-xs text-gray-500 mt-1">499.74/600</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-orange-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Python Developer</p>
              <p className="text-xs text-gray-600">Hands-on Coding Assessment</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-orange-600">59.4%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Matrix Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Logic */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <p className="text-xs text-blue-100 mb-1">Logic Mastery</p>
          <p className="text-3xl font-bold text-white">97.5%</p>
        </div>

        {/* Coding */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-5 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
            <Code className="w-7 h-7 text-white" />
          </div>
          <p className="text-xs text-indigo-100 mb-1">Hands-on Coding</p>
          <p className="text-2xl font-bold text-white">Python</p>
        </div>

        {/* Thoroughness */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-5 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
            <Target className="w-7 h-7 text-white" />
          </div>
          <p className="text-xs text-green-100 mb-1">Thoroughness</p>
          <p className="text-3xl font-bold text-white">80.5%</p>
        </div>

        {/* Motivation */}
        <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-5 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
            <Trophy className="w-7 h-7 text-white" />
          </div>
          <p className="text-xs text-orange-100 mb-1">Motivation</p>
          <p className="text-sm font-bold text-white leading-tight">Accomplishment Driven</p>
        </div>
      </div>

      {/* Personality Traits - The Big 5 */}
      <div className="bg-white rounded-3xl p-5 border-2 border-gray-200 shadow-lg">
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-6 h-6 text-purple-600" />
          <h2 className="text-lg font-bold text-gray-900">Work Personality Traits</h2>
        </div>

        <div className="space-y-3">
          {/* Thoroughness - High */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Thoroughness</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-green-600">80.56%</span>
                <span className="text-xs px-2 py-1 bg-green-600 text-white rounded-full font-semibold">HIGH</span>
              </div>
            </div>
            <div className="h-2 bg-green-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" style={{ width: '80.56%' }} />
            </div>
            <p className="text-xs text-green-700 mt-2">Reliable • Consistent • Organized</p>
          </div>

          {/* Sociableness */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Sociableness</span>
              </div>
              <span className="text-sm font-bold text-blue-600">68.06%</span>
            </div>
            <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style={{ width: '68.06%' }} />
            </div>
            <p className="text-xs text-blue-700 mt-2">Balanced • Calculative Energy</p>
          </div>

          {/* Amiableness */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900 text-sm">Amiableness</span>
              <span className="text-sm font-bold text-pink-600">65.28%</span>
            </div>
            <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-pink-500 to-rose-600 rounded-full" style={{ width: '65.28%' }} />
            </div>
            <p className="text-xs text-pink-700 mt-1">Supportive • Recognizes Needs</p>
          </div>

          {/* Open-mindedness */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-4 border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900 text-sm">Open-mindedness</span>
              <span className="text-sm font-bold text-purple-600">61.11%</span>
            </div>
            <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-violet-600 rounded-full" style={{ width: '61.11%' }} />
            </div>
            <p className="text-xs text-purple-700 mt-1">Seeker of New Approaches</p>
          </div>

          {/* Compulsiveness */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900 text-sm">Compulsiveness</span>
              <span className="text-sm font-bold text-gray-600">41.67%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-gray-500 to-slate-600 rounded-full" style={{ width: '41.67%' }} />
            </div>
            <p className="text-xs text-gray-600 mt-1">Calm Under Pressure</p>
          </div>
        </div>
      </div>

      {/* Motivational Drivers */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-5 border-2 border-amber-200 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-6 h-6 text-amber-600" />
          <h2 className="text-lg font-bold text-gray-900">Top Motivational Drivers</h2>
        </div>

        <div className="space-y-3">
          {/* Accomplishment */}
          <div className="bg-white rounded-2xl p-4 border-2 border-amber-300 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl shadow-lg">
                🏆
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">Accomplishment</h3>
                <p className="text-xs text-gray-600">Solving complex problems</p>
              </div>
              <span className="text-2xl font-bold text-amber-600">83.33%</span>
            </div>
            <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full" style={{ width: '83.33%' }} />
            </div>
          </div>

          {/* Association */}
          <div className="bg-white rounded-2xl p-4 border border-amber-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤝</span>
                <span className="font-semibold text-gray-900">Association</span>
              </div>
              <span className="text-lg font-bold text-blue-600">76.67%</span>
            </div>
            <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style={{ width: '76.67%' }} />
            </div>
            <p className="text-xs text-gray-600 mt-2">Thrives in cordial teams</p>
          </div>

          {/* Authority */}
          <div className="bg-white rounded-2xl p-4 border border-amber-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span className="font-semibold text-gray-900">Authority</span>
              </div>
              <span className="text-lg font-bold text-purple-600">75.00%</span>
            </div>
            <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" style={{ width: '75%' }} />
            </div>
            <p className="text-xs text-gray-600 mt-2">Taking initiative & leading tasks</p>
          </div>
        </div>
      </div>

      {/* Professional Bio */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-6 text-white shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-6 h-6 text-yellow-400" />
          <h2 className="text-lg font-bold">Professional Summary</h2>
        </div>
        <p className="text-sm text-blue-100 leading-relaxed">
          I am a <strong className="text-white">highly motivated professional</strong> driven by Accomplishment and Structure. My NQT psychometric assessment reveals a <strong className="text-green-400">'High' score in Thoroughness (80%)</strong>, meaning I ensure consistent results and reliability in every project.
        </p>
        <p className="text-sm text-blue-100 leading-relaxed mt-3">
          I excel in high-pressure environments, utilizing <strong className="text-green-400">superior Reasoning Abilities (Top 1% - 97.5%)</strong> to solve complex problems. Motivated by risk-taking and goal achievement, I bring a balanced mix of <strong className="text-white">advanced technical logic and collaborative energy</strong> to the table.
        </p>
        
        <div className="mt-5 flex items-center gap-2 text-xs text-blue-200">
          <BadgeCheck className="w-4 h-4" />
          <span>TCS iON Verified Profile • Valid till May 2025</span>
        </div>
      </div>

      {/* Key Strengths Tags */}
      <div className="flex flex-wrap gap-2">
        {[
          { text: 'Consistent Results', color: 'from-green-500 to-emerald-600' },
          { text: 'Risk Taker', color: 'from-orange-500 to-red-600' },
          { text: 'Team Player', color: 'from-blue-500 to-indigo-600' },
          { text: 'Leading Initiative', color: 'from-purple-500 to-pink-600' },
        ].map((tag, index) => (
          <div key={index} className={`px-4 py-2 bg-gradient-to-r ${tag.color} text-white rounded-full text-xs font-semibold shadow-lg`}>
            {tag.text}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={handleDownloadReport}
          className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold shadow-lg active:scale-95 transition-transform"
        >
          <Download className="w-5 h-5" />
          Download Report
        </button>
        <button 
          onClick={handleShareProfile}
          className="flex items-center justify-center gap-2 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold shadow-md active:scale-95 transition-transform"
        >
          <Share2 className="w-5 h-5" />
          Share Profile
        </button>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-5 text-white text-center shadow-xl">
        <p className="text-sm font-semibold mb-2">🎯 Want to achieve similar results?</p>
        <p className="text-xs text-green-100 mb-4">Join our NQT Success Bundle and master your exam</p>
        <button 
          onClick={handleGetStarted}
          className="w-full py-3 bg-white text-green-600 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
        >
          Get Started with Prep Bundle
        </button>
      </div>
    </div>
  );
}