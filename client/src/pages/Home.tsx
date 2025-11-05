import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

export default function Home() {
  const auditPoints = [
    {
      id: 1,
      title: "Above the Fold",
      score: 6,
      status: "needs-improvement",
      strengths: [
        "Real event photography creates immediate visual connection",
        "Sub-headline communicates company values and growth story",
        "Phone number visible in navigation (02392 295 503)"
      ],
      weaknesses: [
        "Headline is just company name, not a value proposition",
        "No clear statement of services above the fold",
        "Call-to-action buried in navigation",
        "4 Critical Questions require scrolling to answer"
      ],
      recommendation: "Redesign hero section with benefit-driven headline such as 'Professional Security Services for Events, Facilities & Licensed Venues Across the UK' and add a prominent call-to-action button positioned prominently in the hero area.",
      screenshot: "/hero-section.webp"
    },
    {
      id: 2,
      title: "Video",
      score: 0,
      status: "critical",
      strengths: [],
      weaknesses: [
        "NO video present on the homepage",
        "Missing opportunity to humanize the business",
        "Cannot answer 4 Critical Questions through video",
        "Missing chance to increase conversions by up to 80%"
      ],
      recommendation: "Create a 45-60 second homepage video featuring your team, services, and company values. Position it prominently above the fold. Video should answer: Who you are, What you do, Why clients should choose you, and What action to take next.",
      screenshot: null
    },
    {
      id: 3,
      title: "Images",
      score: 8,
      status: "excellent",
      strengths: [
        "Real images of staff and events throughout (no stock photos)",
        "Images show real customers, staff, and security personnel in action",
        "Service section has excellent authentic photos",
        "Images humanize the business effectively",
        "Strong visual storytelling"
      ],
      weaknesses: [
        "Could add more 'after' images showing successful outcomes"
      ],
      recommendation: "Continue using authentic photography. Consider adding before/after case study images and more client success visuals to strengthen credibility further.",
      screenshot: "/services-section.webp"
    },
    {
      id: 4,
      title: "Main Navigation",
      score: 6,
      status: "needs-improvement",
      strengths: [
        "Company logo in correct position (top left)",
        "Phone number visible: 02392 295 503",
        "Main CTA 'Request a Quote' present"
      ],
      weaknesses: [
        "Navigation cluttered with too many items",
        "CTA not in prominent top right position",
        "No indication if phone number is a tracking number",
        "Dropdown menus add complexity"
      ],
      recommendation: "Simplify navigation to 5-7 core items. Move primary CTA to top right with contrasting color. Consider sticky header for better accessibility.",
      screenshot: null
    },
    {
      id: 5,
      title: "Personality",
      score: 7,
      status: "good",
      strengths: [
        "Real photos of team members visible",
        "Testimonials with names included",
        "Family-owned business story mentioned",
        "Authentic brand voice"
      ],
      weaknesses: [
        "NO video to capture business essence",
        "Could be more differentiated from competitors",
        "Missing founder/owner story details"
      ],
      recommendation: "Add video testimonials and founder story. Highlight what makes Vespasian Security unique beyond 'family-owned' - focus on specific differentiators.",
      screenshot: null
    },
    {
      id: 6,
      title: "Call to Action",
      score: 5,
      status: "needs-improvement",
      strengths: [
        "Multiple CTAs present throughout page",
        "Floating 'Contact Us' button available"
      ],
      weaknesses: [
        "CTAs are inconsistent across the page",
        "Primary CTA not repeated enough",
        "CTA copy could be more compelling",
        "No clear CTA above the fold in hero section"
      ],
      recommendation: "Add primary CTA to hero section. Repeat main CTA 3+ times throughout page. Use more compelling copy like 'Get Your Free Security Quote' instead of generic 'Request a Quote'.",
      screenshot: null
    },
    {
      id: 7,
      title: "Body Copy",
      score: 6,
      status: "needs-improvement",
      strengths: [
        "Good family business story",
        "Some customer-centric language present"
      ],
      weaknesses: [
        "More 'we/our' than 'you/your' language",
        "Feature-focused rather than benefit-focused",
        "Lacks clear visual breaks between sections",
        "Company-centric rather than customer-centric"
      ],
      recommendation: "Rewrite copy to achieve 3:1 'you:we' ratio. Focus on customer benefits rather than company features. Add clear section breaks and use benefit-driven headlines.",
      screenshot: null
    },
    {
      id: 8,
      title: "Trust Elements",
      score: 4,
      status: "needs-improvement",
      strengths: [
        "Testimonials present with names",
        "Real photos add credibility"
      ],
      weaknesses: [
        "NO customer logos visible",
        "NO independent review site links (Google Reviews, Trustpilot)",
        "NO award logos or certifications displayed",
        "Testimonials lack detail and headlines",
        "No customer success stories"
      ],
      recommendation: "Add client logos section. Integrate Google Reviews widget. Display SIA certifications and industry awards. Enhance testimonial presentation with headlines, photos, and detailed stories.",
      screenshot: null
    },
    {
      id: 9,
      title: "Footer",
      score: 3,
      status: "critical",
      strengths: [
        "Email address present",
        "Social media links included"
      ],
      weaknesses: [
        "NO expanded navigation menu",
        "NO physical address in footer",
        "NO Privacy Policy link",
        "NO Terms of Service link",
        "Copyright year outdated (2022)",
        "'Proudly created with Wix.com' reduces professionalism"
      ],
      recommendation: "Implement three-column footer: Column 1 - Company Info (address, phone, email, social); Column 2 - Quick Links (all pages); Column 3 - Resources (guides, policies, certifications). Update copyright to 2025 and remove Wix branding.",
      screenshot: "/footer-section.webp"
    },
    {
      id: 10,
      title: "SEO & Technical",
      score: 5,
      status: "needs-improvement",
      strengths: [
        "Page title present",
        "Basic structure in place"
      ],
      weaknesses: [
        "Page title not keyword-optimized",
        "H1 tag just company name (should include services)",
        "Some images have generic alt text",
        "Meta description needs verification",
        "No tracking number verification"
      ],
      recommendation: "Optimize page title with keywords. Update H1 to include service keywords. Fix all alt text. Ensure Google Analytics is properly installed. Use unique tracking phone number.",
      screenshot: null
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-yellow-600";
    if (score >= 4) return "text-orange-600";
    return "text-red-600";
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      "excellent": "bg-green-100 text-green-800 border-green-300",
      "good": "bg-blue-100 text-blue-800 border-blue-300",
      "needs-improvement": "bg-yellow-100 text-yellow-800 border-yellow-300",
      "critical": "bg-red-100 text-red-800 border-red-300"
    };
    const labels = {
      "excellent": "Excellent",
      "good": "Good",
      "needs-improvement": "Needs Improvement",
      "critical": "Critical"
    };
    return (
      <Badge className={`${variants[status as keyof typeof variants]} border`}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  const totalScore = auditPoints.reduce((sum, point) => sum + point.score, 0);
  const maxScore = auditPoints.length * 10;
  const percentageScore = Math.round((totalScore / maxScore) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/t40-logo.png" alt="T40 Associates" className="h-16" />
          <div className="text-right">
            <h1 className="text-xl font-bold text-slate-800">Website Audit Report</h1>
            <p className="text-sm text-slate-600">November 2025</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-8">
            <img src="/vespasian-logo.png" alt="Vespasian Security" className="h-24 bg-white p-4 rounded-lg shadow-lg" />
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-2">Vespasian Security</h2>
              <p className="text-xl text-pink-100 mb-4">10-Point Website Audit & Recommendations</p>
              <p className="text-pink-50">Comprehensive analysis of your website's performance across critical conversion factors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="container mx-auto px-6 py-12">
        <Card className="p-8 bg-white shadow-xl border-2 border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Executive Summary</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-pink-600 mb-2">{percentageScore}%</div>
              <div className="text-slate-600 font-medium">Overall Score</div>
              <div className="text-sm text-slate-500 mt-2">{totalScore}/{maxScore} points</div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="text-green-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Key Strengths</h4>
                  <p className="text-sm text-slate-600">Excellent authentic photography (8/10) and good personality elements (7/10) create strong visual connection and brand authenticity.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingDown className="text-red-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Critical Opportunities</h4>
                  <p className="text-sm text-slate-600">Complete absence of video content (0/10), minimal footer (3/10), and weak trust elements (4/10) represent the highest-impact improvement areas.</p>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <p className="text-sm text-blue-900"><strong>Priority Recommendation:</strong> Adding a 45-60 second homepage video could increase conversions by up to 80% - this is your single biggest opportunity.</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Detailed Audit Points */}
      <section className="container mx-auto px-6 pb-16">
        <h3 className="text-3xl font-bold text-slate-800 mb-8">Detailed Analysis</h3>
        <div className="space-y-8">
          {auditPoints.map((point) => (
            <Card key={point.id} className="p-6 bg-white shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-200">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-slate-500">#{point.id}</span>
                    <h4 className="text-2xl font-bold text-slate-800">{point.title}</h4>
                    {getStatusBadge(point.status)}
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-5xl font-bold ${getScoreColor(point.score)}`}>
                    {point.score}<span className="text-2xl text-slate-400">/10</span>
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              {point.screenshot && (
                <div className="mb-6">
                  <img 
                    src={point.screenshot} 
                    alt={`${point.title} screenshot`}
                    className="w-full rounded-lg border-2 border-slate-200 shadow-md"
                  />
                  <p className="text-xs text-slate-500 text-center mt-2 italic">Current website section</p>
                </div>
              )}

              {/* Analysis Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Strengths */}
                {point.strengths.length > 0 && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 size={18} />
                      What's Working
                    </h5>
                    <ul className="space-y-2">
                      {point.strengths.map((strength, idx) => (
                        <li key={idx} className="text-sm text-green-900 flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Weaknesses */}
                {point.weaknesses.length > 0 && (
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h5 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <XCircle size={18} />
                      What's Missing
                    </h5>
                    <ul className="space-y-2">
                      {point.weaknesses.map((weakness, idx) => (
                        <li key={idx} className="text-sm text-red-900 flex items-start gap-2">
                          <span className="text-red-600 mt-0.5">✗</span>
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Recommendation */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <AlertTriangle size={18} />
                  Recommended Action
                </h5>
                <p className="text-sm text-blue-900 leading-relaxed">{point.recommendation}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Priority Recommendations */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white py-16" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)'}}>
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Top 3 Priority Actions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-white">
              <div className="text-4xl font-bold text-pink-400 mb-3">1</div>
              <h4 className="text-xl font-bold mb-3">Add Homepage Video</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Create a 45-60 second video featuring your team and services. This single addition could increase conversions by 80%.
              </p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-white">
              <div className="text-4xl font-bold text-pink-400 mb-3">2</div>
              <h4 className="text-xl font-bold mb-3">Redesign Hero Section</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Replace company name with benefit-driven headline and add prominent CTA above the fold.
              </p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20 text-white">
              <div className="text-4xl font-bold text-pink-400 mb-3">3</div>
              <h4 className="text-xl font-bold mb-3">Add Trust Elements</h4>
              <p className="text-white/90 text-sm leading-relaxed">
                Display client logos, integrate Google Reviews, and showcase SIA certifications and awards.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12" style={{backgroundColor: '#1e293b'}}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <img src="/t40-logo.png" alt="T40 Associates" className="h-12 mb-4" />
              <p className="text-slate-400 text-sm">Where Creativity Meets Efficiency</p>
              <p className="text-slate-500 text-xs mt-2">Two Blokes. One Mission. No Fluff.</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm mb-2">Need help implementing these recommendations?</p>
              <p className="text-white font-semibold">Contact T40 Associates</p>
              <p className="text-pink-400 text-sm mt-1">Let's transform your website together</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-500 text-xs">
            <p>© 2025 T40 Associates. All rights reserved. | Audit Report Generated November 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
