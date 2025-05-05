"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const totalSlides = 12;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-rose-800 flex flex-col"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">
            G
          </div>
          <span className="text-white text-2xl font-bold">Glint</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-white">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </header>

      {/* Side Navigation Arrows */}
      <div className="fixed inset-y-0 left-0 flex items-center z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`${
            showArrows ? "opacity-60" : "opacity-0"
          } hover:opacity-100 disabled:opacity-0 bg-black/30 text-white p-3 rounded-r-full transition-opacity duration-300 focus:outline-none`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={30} />
        </button>
      </div>

      <div className="fixed inset-y-0 right-0 flex items-center z-10">
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`${
            showArrows ? "opacity-60" : "opacity-0"
          } hover:opacity-100 disabled:opacity-0 bg-black/30 text-white p-3 rounded-l-full transition-opacity duration-300 focus:outline-none`}
          aria-label="Next slide"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Slides */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl mx-auto">
          {/* Slide 1: Title */}
          {currentSlide === 0 && (
            <div className="text-center animate-fadeIn">
              <div className="flex justify-center mb-8">
                <div className="bg-red-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-5xl font-bold">
                  G
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                Glint
              </h1>
              <p className="text-2xl md:text-3xl text-rose-300 mb-12">
                Your AI Stylist, Your Style
              </p>
              <div className="mb-12">
                <p className="text-white/80 text-xl">Founder & CEO</p>
                <p className="text-white text-xl">May 2025</p>
              </div>
              <div className="text-white/80">
                <p>brian@verticalai.com.au | glint.style</p>
              </div>
            </div>
          )}

          {/* Slide 2: The Problem */}
          {currentSlide === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Online Shopping Feels Impersonal and Overwhelming
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <Image
                    src="/img1.png"
                    alt="Cluttered product grid"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="text-rose-300 text-xl font-semibold mb-2">
                    Too Many Choices
                  </div>
                  <p className="text-white/80">
                    Shoppers face endless choices with no trusted guide.
                  </p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <Image
                    src="/img2.png"
                    alt="Frustrated shopper"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="text-rose-300 text-xl font-semibold mb-2">
                    Too Little Trust
                  </div>
                  <p className="text-white/80">
                    Current platforms lack personalization, leading to low
                    conversion rates (avg. 2-3% in e-commerce).
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-white text-xl">
                  No emotional connection = missed opportunities.
                </p>
              </div>
            </div>
          )}

          {/* Slide 3: The Solution */}
          {currentSlide === 2 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Glint – Your AI-Powered Personal Stylist
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-rose-400 p-2 rounded-full">
                        <Play className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        Multimodal AI Avatar
                      </h3>
                    </div>
                    <p className="text-white/80">
                      Delivers free, tailored styling sessions via "chat to
                      shop" interface.
                    </p>
                  </div>

                  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-rose-400 p-2 rounded-full">
                        <Play className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        Builds Trust
                      </h3>
                    </div>
                    <p className="text-white/80">
                      Human-like interaction boosts engagement and conversions.
                    </p>
                  </div>

                  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-rose-400 p-2 rounded-full">
                        <Play className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        Rich Data Collection
                      </h3>
                    </div>
                    <p className="text-white/80">
                      Gathers demographics, style preferences, and product
                      interests from the first touchpoint.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <div className="max-w-xs">
                    <div className="bg-black/30 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-rose-400 rounded-full w-10 h-10 flex items-center justify-center">
                          <Play className="text-white" size={16} />
                        </div>
                        <div>
                          <h3 className="text-white text-sm font-semibold">
                            AI Styling Session
                          </h3>
                          <p className="text-white/80 text-xs">
                            Tap to see the magic ✨
                          </p>
                        </div>
                      </div>
                      <Image
                        src="https://www.glint.style/rep-dem-bg.png"
                        alt="AI avatar mockup"
                        width={400}
                        height={300}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <a
                      href="https://www.glint.style/waitroom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 rounded-full transition-colors inline-block text-center"
                    >
                      Chat to Shop
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 4: Market Opportunity */}
          {currentSlide === 3 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                A $7 Trillion Market Awaits
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Global E-commerce
                    </h3>
                    <p className="text-5xl font-bold text-rose-300 mb-2">$7T</p>
                    <p className="text-white/80">by 2025 (Statista)</p>
                  </div>

                  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Personalization Market
                    </h3>
                    <p className="text-5xl font-bold text-rose-300 mb-2">
                      $800B
                    </p>
                    <p className="text-white/80">
                      opportunity in retail (McKinsey)
                    </p>
                  </div>

                  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Target Audience
                    </h3>
                    <p className="text-5xl font-bold text-rose-300 mb-2">
                      1.8B
                    </p>
                    <p className="text-white/80">
                      Fashion-forward Gen Z & Millennials globally
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full bg-purple-700/50"></div>
                    <div className="absolute inset-0 rounded-full bg-rose-500/50 scale-75 translate-x-4 translate-y-4"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white text-lg font-semibold">
                          Glint's Target
                        </p>
                        <p className="text-rose-300 text-3xl font-bold">$7T</p>
                        <p className="text-white/80 text-sm">
                          Market Opportunity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 5: Product */}
          {currentSlide === 4 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Chat to Shop, Styled by AI
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Free Styling Sessions
                    </h3>
                    <p className="text-white/80">
                      Multimodal AI (audio + visual) curates personalized looks.
                    </p>
                  </div>

                  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Data-Driven
                    </h3>
                    <p className="text-white/80">
                      Collects style preferences and product interests in
                      real-time.
                    </p>
                  </div>

                  <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Trusted Companion
                    </h3>
                    <p className="text-white/80">
                      AI avatar stays with users, building loyalty.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <div className="max-w-xs">
                    <div className="bg-black/30 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-rose-400 rounded-full w-10 h-10 flex items-center justify-center">
                          <Play className="text-white" size={16} />
                        </div>
                        <div>
                          <h3 className="text-white text-sm font-semibold">
                            AI Styling Session
                          </h3>
                          <p className="text-white/80 text-xs">
                            Tap to see the magic ✨
                          </p>
                        </div>
                      </div>
                      <Image
                        src="https://www.glint.style/rep-dem-bg.png"
                        alt="Product mockup"
                        width={400}
                        height={300}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="flex gap-2 overflow-x-auto py-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-md"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 6: Business Model */}
          {currentSlide === 5 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Multiple Revenue Streams, Massive Scale
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm text-center">
                  <div className="bg-rose-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Commissions
                  </h3>
                  <p className="text-white/80">
                    Brands pay for product placements in styling sessions.
                  </p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm text-center">
                  <div className="bg-rose-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Advertising
                  </h3>
                  <p className="text-white/80">
                    Hyper-targeted ads using user data.
                  </p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm text-center">
                  <div className="bg-rose-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Subscriptions
                  </h3>
                  <p className="text-white/80">
                    Premium features (e.g., exclusive sessions, priority
                    recommendations).
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm flex justify-center">
                <div className="text-center">
                  <div className="text-rose-300 text-6xl font-bold mb-2">$</div>
                  <p className="text-white text-xl">Revenue Convergence</p>
                </div>
              </div>
            </div>
          )}

          {/* Slide 7: Traction */}
          {currentSlide === 6 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Early Wins, Big Potential
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm text-center">
                  <p className="text-5xl font-bold text-rose-300 mb-2">50+</p>
                  <h3 className="text-xl font-semibold text-white">
                    Beta Users
                  </h3>
                  <p className="text-white/80">engaged in styling sessions</p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm text-center">
                  <p className="text-5xl font-bold text-rose-300 mb-2">LOIs</p>
                  <h3 className="text-xl font-semibold text-white">
                    Brand Interest
                  </h3>
                  <p className="text-white/80">from Brand A, Brand B</p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm text-center">
                  <p className="text-5xl font-bold text-rose-300 mb-2">10%</p>
                  <h3 className="text-xl font-semibold text-white">
                    Conversion Rate
                  </h3>
                  <p className="text-white/80">3x industry average</p>
                </div>
              </div>

              <div className="bg-purple-900/40 p-8 rounded-xl backdrop-blur-sm">
                <div className="h-40 relative">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-rose-400/50 rounded-t-lg"></div>

                  <div className="absolute bottom-0 left-1/4 h-16 w-1 bg-white/50"></div>
                  <div className="absolute bottom-[-24px] left-1/4 transform -translate-x-1/2 text-white text-xs">
                    Beta Launch
                  </div>
                  <div className="absolute bottom-16 left-1/4 transform -translate-x-1/2 text-white text-xs">
                    May 5th, 2025
                  </div>

                  <div className="absolute bottom-0 left-2/3 h-16 w-1 bg-white/50"></div>
                  <div className="absolute bottom-[-24px] left-2/3 transform -translate-x-1/2 text-white text-xs">
                    First Brand Deal
                  </div>
                  <div className="absolute bottom-16 left-2/3 transform -translate-x-1/2 text-white text-xs">
                    May 24, 2025
                  </div>

                  <div className="absolute bottom-0 right-0 h-16 w-1 bg-white/50"></div>
                  <div className="absolute bottom-[-24px] right-0 transform translate-x-1/2 text-white text-xs">
                    Go-Live
                  </div>
                  <div className="absolute bottom-16 right-0 transform translate-x-1/2 text-white text-xs">
                    Jun 15, 2025
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 8: Competitive Landscape */}
          {currentSlide === 7 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                We're Redefining Personalization
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-purple-900/40 rounded-xl backdrop-blur-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="p-4 text-left text-white">Features</th>
                      <th className="p-4 text-center text-rose-300">Glint</th>
                      <th className="p-4 text-center text-white/80">
                        Stitch Fix
                      </th>
                      <th className="p-4 text-center text-white/80">
                        Amazon Personal Shopper
                      </th>
                      <th className="p-4 text-center text-white/80">
                        Traditional E-commerce
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="p-4 text-white">AI Stylist</td>
                      <td className="p-4 text-center text-rose-300">✓</td>
                      <td className="p-4 text-center text-white/80">✗</td>
                      <td className="p-4 text-center text-white/80">Partial</td>
                      <td className="p-4 text-center text-white/80">✗</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 text-white">Multimodal</td>
                      <td className="p-4 text-center text-rose-300">✓</td>
                      <td className="p-4 text-center text-white/80">✗</td>
                      <td className="p-4 text-center text-white/80">✗</td>
                      <td className="p-4 text-center text-white/80">✗</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 text-white">Free First Session</td>
                      <td className="p-4 text-center text-rose-300">✓</td>
                      <td className="p-4 text-center text-white/80">✗</td>
                      <td className="p-4 text-center text-white/80">✗</td>
                      <td className="p-4 text-center text-white/80">N/A</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-white">Trust-Driven</td>
                      <td className="p-4 text-center text-rose-300">✓</td>
                      <td className="p-4 text-center text-white/80">Partial</td>
                      <td className="p-4 text-center text-white/80">Partial</td>
                      <td className="p-4 text-center text-white/80">✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-white text-xl text-center">
                  Unlike competitors, Glint starts with a free, scalable styling
                  session.
                </p>
              </div>
            </div>
          )}

          {/* Slide 9: Go-to-Market Strategy */}
          {currentSlide === 8 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Scaling Style, One Chat at a Time
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <div className="bg-rose-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Phase 1
                  </h3>
                  <p className="text-white/80">
                    Partner with mid-tier fashion brands for styling sessions.
                  </p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <div className="bg-rose-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Phase 2
                  </h3>
                  <p className="text-white/80">
                    Viral marketing via TikTok/Instagram (Gen Z-focused) with
                    "Style with Glint" challenges.
                  </p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <div className="bg-rose-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Phase 3
                  </h3>
                  <p className="text-white/80">
                    Expand to premium subscriptions and global brands.
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                <div className="relative h-40">
                  <div className="absolute top-0 left-0 w-full h-8 bg-rose-400/20 rounded-t-lg flex items-center justify-center">
                    <span className="text-white text-sm">Awareness</span>
                  </div>
                  <div className="absolute top-1/4 left-0 w-3/4 h-8 bg-rose-400/40 flex items-center justify-center">
                    <span className="text-white text-sm">Styling Session</span>
                  </div>
                  <div className="absolute top-2/4 left-0 w-1/2 h-8 bg-rose-400/60 flex items-center justify-center">
                    <span className="text-white text-sm">Conversion</span>
                  </div>
                  <div className="absolute top-3/4 left-0 w-1/3 h-8 bg-rose-400/80 rounded-b-lg flex items-center justify-center">
                    <span className="text-white text-sm">Retention</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 10: Team */}
          {currentSlide === 9 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Built by Visionaries
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <div className="w-24 h-24 rounded-full bg-rose-400/20 mx-auto mb-4 overflow-hidden">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D5603AQED5EKPQudbOA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693291802646?e=1752105600&v=beta&t=8KC83HSIBTExiDTpoz6XXpRNASg8rW973WOycsyTxAk"
                      alt="CEO"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-1">
                    David Beros
                  </h3>
                  <p className="text-white/80 text-center mb-4">
                    Product leader, expert in product strategy & vision.
                  </p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <div className="w-24 h-24 rounded-full bg-rose-400/20 mx-auto mb-4 overflow-hidden">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D5603AQFDrUl7T6OXNw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709359001374?e=1752105600&v=beta&t=M8cJuKkKZdk3Fmxg4PNrbZ9P6mtna4jxsStdn8etYyw"
                      alt="Brian Foody"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-1">
                    Brian Foody
                  </h3>
                  <p className="text-white/80 text-center mb-4">
                    CTO with multiple successful exits.
                  </p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <div className="w-24 h-24 rounded-full bg-rose-400/20 mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Fashion Expert"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-1">
                    Fashion Expert
                  </h3>
                  <p className="text-white/80 text-center mb-4">
                    Coming soon...
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm text-center">
                <p className="text-white text-xl">
                  A team with the perfect blend of AI expertise, retail
                  knowledge, and fashion industry experience.
                </p>
              </div>
            </div>
          )}

          {/* Slide 11: Ask */}
          {currentSlide === 10 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Join the Future of Shopping
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Seeking
                  </h3>
                  <p className="text-6xl font-bold text-rose-300 mb-4">$5M</p>
                  <p className="text-white text-xl">Seed Round</p>
                </div>

                <div className="bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Projected Milestones
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                      <p className="text-white">100K users</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                      <p className="text-white">20 brand partnerships</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                      <p className="text-white">18 months timeline</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-purple-900/40 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Use of Funds
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-rose-400/20 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-white mb-2">50%</p>
                    <p className="text-white/80">Product Development</p>
                    <p className="text-white/60 text-sm">
                      (AI enhancements, app scaling)
                    </p>
                  </div>
                  <div className="bg-rose-400/20 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-white mb-2">30%</p>
                    <p className="text-white/80">Marketing</p>
                    <p className="text-white/60 text-sm">
                      (brand partnerships, user acquisition)
                    </p>
                  </div>
                  <div className="bg-rose-400/20 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-white mb-2">20%</p>
                    <p className="text-white/80">Team Expansion</p>
                    <p className="text-white/60 text-sm">
                      (engineering, sales)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 12: Closing */}
          {currentSlide === 11 && (
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Let's Make Shopping Shine
              </h2>

              <div className="bg-purple-900/40 p-8 rounded-xl backdrop-blur-sm text-center mb-8">
                <p className="text-xl text-white mb-6">
                  Glint is redefining e-commerce with AI-driven trust and
                  personalization.
                </p>
                <p className="text-2xl text-rose-300 font-semibold mb-6">
                  Join us to capture a $7T market.
                </p>
                <div className="flex justify-center gap-4">
                  <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full transition-colors">
                    Get Early Access
                  </button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-rose-300 mb-4">
                  Your AI Stylist, Your Style
                </p>
                <p className="text-white/80">
                  brian@verticalai.com.au | glint.style
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="py-4 px-4">
        <div className="flex justify-center gap-2 flex-wrap">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index
                  ? "bg-rose-400"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
