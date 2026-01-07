import { House, BookOpen, Download, CreditCard, User, Settings, GraduationCap, Clock, Award, FileText, CircleCheck, ArrowLeft, Gift, Target, TrendingUp, RefreshCw, MapPin, BadgeCheck, Calendar, X, ChevronRight, QrCode, MessageCircle, Camera, Check, PhoneCall, Send, Trophy, Medal, Star, Share2, ExternalLink, Shield } from 'lucide-react';
import { useState } from 'react';
import { PaymentSection } from './PaymentSection';
import { ProfileSection } from './ProfileSection';
import { PDFEmbedViewer } from './PDFEmbedViewer';

interface TabContentProps {
  activeTab: string;
  onNavigate?: (tab: string) => void;
}

export function TabContent({ activeTab, onNavigate }: TabContentProps) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);

  const subjects = [
    { name: 'Verbal Ability', color: 'from-blue-500 to-blue-600', pages: 180 },
    { name: 'Numerical Ability', color: 'from-purple-500 to-purple-600', pages: 200 },
    { name: 'Reasoning Ability', color: 'from-green-500 to-green-600', pages: 150 },
    { name: 'Advanced Quantitative', color: 'from-pink-500 to-pink-600', pages: 220 },
    { name: 'Programming MCQs', color: 'from-orange-500 to-orange-600', pages: 190 },
    { name: 'Coding Practice', color: 'from-indigo-500 to-indigo-600', pages: 250 },
  ];

  // PDF URLs for each subject
  const subjectPDFs: Record<string, { pdf1: string; pdf2?: string }> = {
    'Verbal Ability': {
      pdf1: 'https://drive.google.com/file/d/1tFedYjKFP9Hgwdto61cQe60g7w03DWrI/view?usp=drive_link',
      pdf2: 'https://drive.google.com/file/d/154fKHFrorX-PrEGHsqxxKdV_3-bMA3wi/view?usp=drive_link',
    },
    'Numerical Ability': {
      pdf1: 'https://drive.google.com/file/d/1n2wkK6d8mb0wt5xljGtAM1DjXq8AXU_1/view?usp=drive_link',
      pdf2: 'https://drive.google.com/file/d/1mfhKNV7hTsu4BVoYioEu1RFlA21P7y8N/view?usp=drive_link',
    },
    'Reasoning Ability': {
      pdf1: 'https://drive.google.com/file/d/1uz0TymyT-4xuB8tqClH5IOuTdjgYdujz/view?usp=drive_link',
      pdf2: 'https://drive.google.com/file/d/1i4CD5DX5DdQCQN1aD4uPFQ7_c96ybun3/view?usp=drive_link',
    },
    'Advanced Quantitative': {
      pdf1: 'https://drive.google.com/file/d/1ABJ5zGaPcq9lZ1ohEcAnan2aU3TpDbFA/view?usp=drive_link',
      pdf2: 'https://drive.google.com/file/d/1V9P_YDFWA4e7k1gvH-gAQz-zLlbZBqWd/view?usp=drive_link',
    },
    'Programming MCQs': {
      pdf1: 'https://drive.google.com/file/d/1YnHHdJ6TzDycVqJVPqEBFggG7RyqlRed/view?usp=drive_link',
    },
    'Coding Practice': {
      pdf1: 'https://drive.google.com/file/d/1tkuZh5FEFuFl15yUtsg2XdEYEfCRG_hY/view?usp=drive_link',
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6 pb-2">
            {/* Syllabus Modal */}
            {showSyllabusModal && (
              <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
                {/* Backdrop */}
                <div 
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                  onClick={() => setShowSyllabusModal(false)}
                />
                
                {/* Modal */}
                <div className="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[85vh] flex flex-col animate-slide-up">
                  {/* Header */}
                  <div className="sticky top-0 bg-white/95 backdrop-blur-xl rounded-t-3xl border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
                    <h2 className="text-xl font-semibold text-gray-900">Complete Syllabus</h2>
                    <button
                      onClick={() => setShowSyllabusModal(false)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Scrollable Content */}
                  <div className="overflow-y-auto px-6 py-4 space-y-5">
                    {/* Part A - Foundation */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold shadow-lg">A</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Part A — Foundation</h3>
                          <p className="text-xs text-gray-500">Mandatory for all aspirants</p>
                        </div>
                      </div>

                      <div className="space-y-3 pl-3">
                        {/* Verbal Ability */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-600" />
                            Verbal Ability
                          </h4>
                          <div className="space-y-1 text-sm text-gray-700 ml-6">
                            <p><strong>Questions:</strong> 20–25</p>
                            <p><strong>Time:</strong> ~25 minutes</p>
                            <p className="mt-2"><strong>Topics:</strong></p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                              <li>Reading Comprehension</li>
                              <li>Grammar & Vocabulary</li>
                              <li>Sentence Correction</li>
                              <li>Synonyms & Antonyms</li>
                              <li>Sentence Completion</li>
                              <li>Error Spotting</li>
                            </ul>
                          </div>
                        </div>

                        {/* Numerical Ability */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-purple-600" />
                            Numerical Ability
                          </h4>
                          <div className="space-y-1 text-sm text-gray-700 ml-6">
                            <p><strong>Questions:</strong> ~20</p>
                            <p><strong>Time:</strong> ~25–40 minutes</p>
                            <p className="mt-2"><strong>Topics:</strong></p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                              <li>Basic Arithmetic (HCF, LCM, Percentages)</li>
                              <li>Profit & Loss</li>
                              <li>Simple & Compound Interest</li>
                              <li>Time, Speed & Distance</li>
                              <li>Ratios & Proportions</li>
                              <li>Averages & Mixtures</li>
                              <li>Data Interpretation (Tables, Charts)</li>
                            </ul>
                          </div>
                        </div>

                        {/* Reasoning Ability */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-green-600" />
                            Reasoning Ability
                          </h4>
                          <div className="space-y-1 text-sm text-gray-700 ml-6">
                            <p><strong>Questions:</strong> ~20</p>
                            <p><strong>Time:</strong> ~25 minutes</p>
                            <p className="mt-2"><strong>Topics:</strong></p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                              <li>Logical Sequences & Patterns</li>
                              <li>Blood Relations</li>
                              <li>Coding-Decoding</li>
                              <li>Direction Sense</li>
                              <li>Seating Arrangements</li>
                              <li>Syllogisms</li>
                              <li>Venn Diagrams</li>
                              <li>Puzzles</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Part B - Advanced */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center font-bold shadow-lg">B</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Part B — Advanced</h3>
                          <p className="text-xs text-gray-500">For select streams/variants</p>
                        </div>
                      </div>

                      <div className="space-y-3 pl-3">
                        {/* Advanced Quantitative */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-100">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-orange-600" />
                            Advanced Quantitative & Reasoning
                          </h4>
                          <div className="space-y-1 text-sm text-gray-700 ml-6">
                            <p><strong>Time:</strong> Shared timer (select variants)</p>
                            <p className="mt-2"><strong>Topics:</strong></p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                              <li>Advanced Algebra & Equations</li>
                              <li>Probability & Permutations</li>
                              <li>Geometry & Mensuration</li>
                              <li>Advanced Data Interpretation</li>
                              <li>Complex Logical Reasoning</li>
                              <li>Advanced Puzzles</li>
                            </ul>
                          </div>
                        </div>

                        {/* Programming/Coding */}
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-4 border border-indigo-100">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-indigo-600" />
                            Advanced Coding / Programming
                          </h4>
                          <div className="space-y-1 text-sm text-gray-700 ml-6">
                            <p><strong>Time:</strong> ~60–90 minutes</p>
                            <p><strong>For:</strong> Tech variants only</p>
                            <p className="mt-2"><strong>Topics:</strong></p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                              <li>Programming MCQs (C, C++, Java, Python)</li>
                              <li>Data Structures (Arrays, Lists, Trees)</li>
                              <li>Algorithms (Sorting, Searching)</li>
                              <li>Object-Oriented Programming</li>
                              <li>Database Basics (SQL)</li>
                              <li>Hands-on Coding Questions</li>
                              <li>Debugging & Code Optimization</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-4 border border-yellow-200">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-600" />
                        Important Notes
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 mt-1">•</span>
                          <span>The exact pattern may vary slightly based on the specific NQT variant you register for</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 mt-1">•</span>
                          <span>Negative marking may apply for certain sections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 mt-1">•</span>
                          <span>Always check the official TCS iON portal for the most current syllabus</span>
                        </li>
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        setShowSyllabusModal(false);
                        onNavigate?.('materials');
                      }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-lg active:scale-95 transition-transform"
                    >
                      Start Learning Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Hero Section - Minimalist */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 text-white">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Trophy className="w-4 h-4" />
                  <span className="text-xs font-medium">TCS National Qualifier Test</span>
                </div>
                <h1 className="text-3xl font-bold mb-3 leading-tight">
                  {/* You want to  to<br />Top Tech Jobs */}
                    Dream of TCS?<br />Start with TCS NQT
                </h1>
                <p className="text-sm text-white/70 mb-6 max-w-xs mx-auto">
                  One exam. Thousands of careers. TCS + 1,200 companies.
                </p>
                <button
                  onClick={() => onNavigate?.('bundle')}
                  className="w-full py-4 bg-white text-gray-900 rounded-2xl font-semibold shadow-xl active:scale-[0.98] transition-transform"
                >
                  Get Roadmap + Materials
                </button>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 border border-gray-200">
                <div className="text-2xl mb-2">📝</div>
                <p className="text-xs text-gray-500 mb-1">Format</p>
                <p className="text-sm font-semibold text-gray-900">Computer Based</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-200">
                <div className="text-2xl mb-2">⏱️</div>
                <p className="text-xs text-gray-500 mb-1">Duration</p>
                <p className="text-sm font-semibold text-gray-900">190 Minutes</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-200">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-xs text-gray-500 mb-1">Validity</p>
                <p className="text-sm font-semibold text-gray-900">24 Months</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-200">
                <div className="text-2xl mb-2">🏢</div>
                <p className="text-xs text-gray-500 mb-1">Companies</p>
                <p className="text-sm font-semibold text-gray-900">1,200+ Hiring</p>
              </div>
            </div>

            {/* Exam Structure - iOS Cards */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">TCS NQT Exam Structure</h2>
              
              {/* Part A */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-2xl border border-white/30">
                    A
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Foundation Skills</h3>
                    <p className="text-xs text-white/80">Mandatory for all</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Verbal Ability</span>
                      <span className="text-xs text-white/70">25 min</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Numerical Ability</span>
                      <span className="text-xs text-white/70">40 min</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Reasoning Ability</span>
                      <span className="text-xs text-white/70">25 min</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part B */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-2xl border border-white/30">
                    B
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Advanced Coding</h3>
                    <p className="text-xs text-white/80">For tech profiles</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Programming MCQs</span>
                      <span className="text-xs text-white/70">30 min</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Hands-on Coding</span>
                      <span className="text-xs text-white/70">60 min</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowSyllabusModal(true)}
                className="w-full text-center py-3 bg-gray-100 text-gray-900 rounded-xl font-medium active:scale-[0.98] transition-transform"
              >
                View Complete Syllabus
              </button>
            </div>

            {/* What You Get - Grid Style */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">What You Get</h2>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-2xl mb-3 shadow-md">
                    📚
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">6 Subjects</h3>
                  <p className="text-xs text-gray-600">Complete syllabus coverage</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-100">
                  <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center text-2xl mb-3 shadow-md">
                    📄
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">1200+ Pages</h3>
                  <p className="text-xs text-gray-600">Study materials</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
                  <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center text-2xl mb-3 shadow-md">
                    ✅
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Mock Tests</h3>
                  <p className="text-xs text-gray-600">Timed practice exams</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 border border-orange-100">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center text-2xl mb-3 shadow-md">
                    💡
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Solutions</h3>
                  <p className="text-xs text-gray-600">Detailed explanations</p>
                </div>
              </div>
            </div>

            {/* Why Choose This Bundle */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Why This Bundle?</h2>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CircleCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">2024-25 Updated Content</p>
                    <p className="text-xs text-gray-600">Aligned with latest exam pattern</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CircleCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Previous Year Questions</p>
                    <p className="text-xs text-gray-600">Topic-wise organized PDFs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CircleCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Lifetime Access</p>
                    <p className="text-xs text-gray-600">Download and study offline anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CircleCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Quick Revision Notes</p>
                    <p className="text-xs text-gray-600">Perfect for last-minute prep</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card - iOS Style */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-2xl">
              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4 border border-white/30">
                  <Star className="w-4 h-4" />
                  <span className="text-xs font-medium">Limited Time Offer</span>
                </div>
                
                <div className="mb-2">
                  <span className="text-5xl font-bold">₹480</span>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-lg text-white/70 line-through">₹999</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold border border-white/30">
                    52% OFF
                  </span>
                </div>
                
                <p className="text-sm text-white/90 mb-6">
                  Complete NQT preparation bundle.<br />Everything you need to succeed.
                </p>

                <button
                  onClick={() => onNavigate?.('bundle')}
                  className="w-full py-4 bg-white text-green-600 rounded-2xl font-bold shadow-xl active:scale-[0.98] transition-transform mb-3"
                >
                  Get Complete Bundle
                </button>

                <button
                  onClick={() => onNavigate?.('materials')}
                  className="w-full py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium border border-white/30 active:scale-[0.98] transition-transform"
                >
                  Preview Materials
                </button>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center text-xs text-gray-500 pb-2">
              <p className="mb-2">This is a preparation bundle. Official exam registration is separate.</p>
              <a 
                href="https://www.tcs.com/careers/tcs-national-qualifier-test" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 font-medium inline-flex items-center gap-1"
              >
                Visit TCS iON Portal
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        );

      case 'materials':
        if (selectedSubject) {
          const subject = subjects.find(s => s.name === selectedSubject);
          const pdfs = subjectPDFs[selectedSubject];
          
          return (
            <div className="space-y-5">
              <button
                onClick={() => setSelectedSubject(null)}
                className="flex items-center gap-2 text-blue-600 font-medium active:scale-95 transition-transform"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Subjects
              </button>

              <div className={`bg-gradient-to-br ${subject?.color} rounded-3xl p-6 text-white shadow-xl`}>
                <h1 className="text-3xl mb-2 font-bold">{selectedSubject}</h1>
                <p className="text-white/90 text-sm">{subject?.pages} pages of comprehensive content</p>
                <div className="mt-4 flex items-center gap-2 text-white/80 text-xs">
                  <FileText className="w-4 h-4" />
                  <span>Scroll down to view sample PDFs</span>
                </div>
              </div>

              {/* PDF Section 1 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Chapter 1: Fundamentals</h3>
                        <p className="text-xs text-gray-500">{selectedSubject} - Part 1</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 text-xs font-medium">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span>Live Preview</span>
                    </div>
                  </div>
                </div>

                <div className="relative bg-gray-50" style={{ height: '600px' }}>
                  <PDFEmbedViewer pdfUrl={pdfs.pdf1} />
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold text-gray-900 mb-1">This is a sample preview</p>
                    <p>Get the complete {subject?.pages}-page material with all chapters, practice questions, and solutions in the full bundle.</p>
                  </div>
                </div>
              </div>

              {/* PDF Section 2 - Only show if pdf2 exists */}
              {pdfs.pdf2 && (
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold shadow-md">
                          2
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Chapter 2: Advanced Topics</h3>
                          <p className="text-xs text-gray-500">{selectedSubject} - Part 2</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-green-600 text-xs font-medium">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span>Live Preview</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-gray-50" style={{ height: '600px' }}>
                    <PDFEmbedViewer pdfUrl={pdfs.pdf2} />
                  </div>
                </div>
              )}

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Get Full Access</h3>
                </div>
                <p className="text-white/90 text-sm mb-5">
                  Unlock all {subject?.pages} pages of {selectedSubject} plus 5 more subjects, mock tests, and solutions for just ₹480!
                </p>
                <button
                  onClick={() => onNavigate?.('bundle')}
                  className="w-full py-4 bg-white text-blue-600 rounded-2xl font-semibold shadow-lg active:scale-[0.98] transition-transform"
                >
                  Get Complete Bundle - ₹480
                </button>
              </div>
            </div>
          );
        }

        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl">Study Materials</h1>
              <p className="text-gray-500 mt-1">Preview subject-wise content</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Select a Subject</h2>
              <div className="grid grid-cols-2 gap-3">
                {subjects.map((subject) => (
                  <button
                    key={subject.name}
                    onClick={() => setSelectedSubject(subject.name)}
                    className={`bg-gradient-to-br ${subject.color} rounded-2xl p-6 text-white text-left transition-transform active:scale-95`}
                  >
                    <BookOpen className="w-8 h-8 mb-3" />
                    <h3 className="font-semibold mb-1">{subject.name}</h3>
                    <p className="text-sm text-white/80">{subject.pages} pages</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'bundle':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl">Complete Bundle</h1>
              <p className="text-gray-500 mt-1">Everything you need to ace your exam</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 border-2 border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">Full Package</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">₹480</span>
                    <span className="text-lg text-gray-400 line-through">₹999</span>
                  </div>
                </div>
                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  52% OFF
                </div>
              </div>
              <p className="text-sm text-gray-600">🔥 Limited time offer</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">What's Included</h2>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '📚', title: '6 Subjects', desc: 'A-Z NQT Syllabus' },
                  { icon: '📄', title: '1200+ Pages', desc: '2024-26 Updates' },
                  { icon: '✅', title: 'Topic-Wise PDFs', desc: 'Previous Year Qs' },
                  { icon: '📊', title: 'Sectional Mocks', desc: 'Full section drills' },,
                  { icon: '💡', title: 'Solutions', desc: 'Step-by-step' },
                  { icon: '⚡', title: 'Quick Revision', desc: 'Notes included' },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 border-2 border-gray-100">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Bundle Features</h2>
              <div className="space-y-2">
                {[
                  'Lifetime access to all materials',
                  'Regular updates for 1 year',
                  'Download and study offline',
                  'Mobile-friendly PDF format',
                  'Expert support via email',
                  'day money-back guarantee',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate?.('payment')}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium shadow-lg shadow-blue-500/30 active:scale-95 transition-transform"
            >
              Get Complete Bundle - ₹480
            </button>
          </div>
        );

      case 'payment':
        return <PaymentSection onNavigate={onNavigate} />;

      case 'profile':
        return <ProfileSection onNavigate={onNavigate} />;

      default:
        return null;
    }
  };

  return <div className="pb-6">{renderContent()}</div>;
}
