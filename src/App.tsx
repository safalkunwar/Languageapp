/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { BookingModal } from './components/BookingModal';
import { AuthModal } from './components/AuthModal';
import { SafetyWidget } from './components/SafetyWidget';
import { COMPANIONS, STORIES } from './data';
import { Companion, ExperienceStory } from './types';
import { MapPin, Star, ShieldCheck, Languages, Search, Play } from 'lucide-react';
import * as motion from 'motion/react-client';

const DESTINATION_SUGGESTIONS: Record<string, {name: string, img: string}[]> = {
  'kathmandu': [
    { name: 'Boudhanath', img: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=300&q=80' },
    { name: 'Thamel', img: 'https://images.unsplash.com/photo-1582239634994-436f52acc3f8?auto=format&fit=crop&w=300&q=80' },
    { name: 'Pashupatinath', img: 'https://plus.unsplash.com/premium_photo-1661962360520-272e00e82c16?auto=format&fit=crop&w=300&q=80' },
  ],
  'pokhara': [
    { name: 'Phewa Lake', img: 'https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=300&q=80' },
    { name: 'Sarangkot', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' },
  ],
  'bhaktapur': [
    { name: 'Durbar Square', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80' },
    { name: 'Pottery Square', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80' },
  ],
  'lalitpur': [
    { name: 'Patan Durbar', img: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=300&q=80' },
    { name: 'Patan Museum', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80' },
  ]
};

function App() {
  const [activeTab, setActiveTab] = useState<'explore' | 'bookings' | 'messages' | 'about'>('explore');
  const [selectedCompanion, setSelectedCompanion] = useState<Companion | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingStory, setViewingStory] = useState<ExperienceStory | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'guide' | null>(null);
  const [isGuide, setIsGuide] = useState(false);
  const [showGuideSetup, setShowGuideSetup] = useState(true);
  
  const filteredCompanions = COMPANIONS.filter(c => 
    c.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0F1113] font-sans text-[#E0E0E0] pb-20">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onOpenAuth={setAuthMode} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-8">
        
        {isGuide && showGuideSetup && (
           <div className="mb-8 p-6 bg-[#1A1814] border border-[#C8A25E]/30 rounded-3xl relative overflow-hidden">
              <button onClick={() => setShowGuideSetup(false)} className="absolute top-4 right-4 text-[#8E9299] hover:text-white">✕</button>
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-[#C8A25E]" /> Complete Your Guide Profile</h2>
              <p className="text-sm text-[#8E9299] mb-6">You've been authorized as a guide! Let's set up the information that travelers will see when they browse SATHI.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="col-span-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#2A2D31] rounded-2xl bg-[#1E2124] hover:border-[#C8A25E] cursor-pointer text-[#8E9299] hover:text-[#C8A25E] transition-colors">
                    <div className="w-20 h-20 bg-[#17191C] rounded-full mb-3 flex items-center justify-center">
                       <span className="text-2xl font-light">+</span>
                    </div>
                    <span className="text-sm font-medium">Upload Profile Picture</span>
                 </div>
                 
                 <div className="col-span-1 md:col-span-2 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="text-[10px] uppercase tracking-[0.2em] text-[#8E9299] font-bold block mb-2">Display Name</label>
                         <input type="text" className="w-full px-4 py-2 bg-[#1E2124] border border-[#2A2D31] rounded-xl text-white outline-none focus:border-[#C8A25E] text-sm" placeholder="e.g. Pasang" />
                       </div>
                       <div>
                         <label className="text-[10px] uppercase tracking-[0.2em] text-[#8E9299] font-bold block mb-2">Age</label>
                         <input type="number" className="w-full px-4 py-2 bg-[#1E2124] border border-[#2A2D31] rounded-xl text-white outline-none focus:border-[#C8A25E] text-sm" placeholder="25" />
                       </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#8E9299] font-bold block mb-2">Short Bio</label>
                      <textarea rows={3} className="w-full px-4 py-2 bg-[#1E2124] border border-[#2A2D31] rounded-xl text-white outline-none focus:border-[#C8A25E] text-sm resize-none" placeholder="Tell travelers about yourself and what you love about your city..."></textarea>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#8E9299] font-bold block mb-2">Languages Spoken</label>
                      <input type="text" className="w-full px-4 py-2 bg-[#1E2124] border border-[#2A2D31] rounded-xl text-white outline-none focus:border-[#C8A25E] text-sm" placeholder="English, Nepali, Newari..." />
                    </div>
                    <button className="px-6 py-2.5 bg-[#C8A25E] text-[#0F1113] font-bold uppercase tracking-wide text-xs rounded-xl hover:bg-[#B69150] transition-colors mt-2">Save Profile Data</button>
                 </div>
              </div>
           </div>
        )}

        {activeTab === 'explore' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            {/* Stories Section - Top like Instagram */}
            <div className="mb-4 pt-4">
              <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                 {/* Current user add story mockup */}
                 <div className="shrink-0 w-20 flex flex-col items-center gap-2 cursor-pointer group">
                    <div className="w-16 h-16 rounded-full p-[2px] bg-[#2A2D31] relative">
                       <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Your Story" className="w-full h-full rounded-full border-2 border-[#1E2124] object-cover" />
                       <div className="absolute bottom-0 right-0 bg-[#C8A25E] text-[#0F1113] w-5 h-5 rounded-full flex items-center justify-center font-bold text-lg leading-none border-2 border-[#1E2124]">+</div>
                    </div>
                    <span className="text-xs text-[#8E9299] truncate w-full text-center">Your Story</span>
                 </div>
                 
                 {STORIES.map((story) => (
                    <motion.div 
                      key={story.id} 
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setViewingStory(story)}
                      className="shrink-0 w-20 flex flex-col items-center gap-2 cursor-pointer group"
                    >
                       <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#C8A25E] to-[#B69150]">
                          <img src={story.userAvatar} alt={story.userName} className="w-full h-full rounded-full border-2 border-[#17191C] object-cover group-hover:scale-95 transition-transform" />
                       </div>
                       <span className="text-xs text-white truncate w-full text-center">{story.userName}</span>
                    </motion.div>
                 ))}
              </div>
            </div>

            {/* Visual Hero / Search block */}
            <div className="relative rounded-3xl overflow-hidden h-[300px] mb-8 border border-[#2A2D31]">
               <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-[#0F1113]/40 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-3xl md:text-5xl font-light text-white mb-6">Experience <span className="italic font-serif text-[#C8A25E]">Authenticity</span></h2>
                  
                  {/* Search Bar */}
                  <div className="bg-[#17191C]/90 backdrop-blur-md p-1.5 rounded-2xl border border-[#2A2D31] flex items-center max-w-2xl w-full text-sm">
                    <div className="flex-1 flex items-center px-4 gap-3 bg-transparent">
                       <Search className="w-5 h-5 text-[#8E9299]" />
                       <input 
                         type="text" 
                         placeholder="Where to? (e.g. Kathmandu, Pokhara)" 
                         className="w-full py-2.5 bg-transparent outline-none text-white placeholder-[#8E9299]"
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                       />
                    </div>
                    <button className="ml-2 px-6 py-3 bg-[#C8A25E] text-[#0F1113] rounded-xl font-bold hover:bg-[#B69150] transition uppercase tracking-wide text-xs">
                      Explore
                    </button>
                  </div>
               </div>
            </div>

            {/* Filters/Categories */}
            {(() => {
              const matchedCity = Object.keys(DESTINATION_SUGGESTIONS).find(city => searchQuery.toLowerCase().includes(city));
              if (matchedCity && DESTINATION_SUGGESTIONS[matchedCity]) {
                return (
                  <div className="mb-8">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-[#C8A25E] mb-4">Explore places in {matchedCity.charAt(0).toUpperCase() + matchedCity.slice(1)}</h2>
                    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                       {DESTINATION_SUGGESTIONS[matchedCity].map(place => (
                          <div key={place.name} className="shrink-0 w-40 relative rounded-xl overflow-hidden border border-[#2A2D31] group cursor-pointer">
                             <img src={place.img} alt={place.name} className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113] via-transparent to-transparent"></div>
                             <span className="absolute bottom-2 left-3 text-white text-sm font-semibold">{place.name}</span>
                          </div>
                       ))}
                    </div>
                  </div>
                );
              }
              return (
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Trending', 'Culture & Heritage', 'Street Food', 'Adventure', 'Photography', 'Nightlife'].map((cat, i) => (
                     <span key={cat} className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest cursor-pointer transition border ${i === 0 ? 'bg-[#C8A25E] text-[#0F1113] border-[#C8A25E]' : 'bg-[#1E2124] text-[#8E9299] border-[#2A2D31] hover:border-[#C8A25E]'}`}>
                       {cat}
                     </span>
                  ))}
                </div>
              );
            })()}

            {/* Companions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCompanions.map((companion, idx) => (
                <motion.div 
                  key={companion.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-[#17191C] rounded-2xl overflow-hidden border border-[#2A2D31] shadow-sm hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={companion.imageUrl} 
                      alt={companion.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-gray-900">{companion.rating}</span>
                      <span className="text-xs text-gray-500">({companion.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-white flex items-center gap-1.5">
                          {companion.name}, {companion.age}
                          {companion.isVerified && (
                            <ShieldCheck className="w-4 h-4 text-[#C8A25E]" title="KYC Verified" />
                          )}
                        </h3>
                        <p className="text-[#8E9299] text-sm flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {companion.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[#8E9299] line-clamp-2 mt-2 mb-4 flex-1">
                      {companion.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {companion.interests.slice(0, 3).map(interest => (
                        <span key={interest} className="text-xs px-2 py-0.5 bg-[#1E2124] border border-[#2A2D31] text-[#8E9299] rounded-md">
                          {interest}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#8E9299] mb-4">
                       <Languages className="w-4 h-4" />
                       {companion.languages.join(' • ')}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2A2D31]">
                      <span className="font-semibold text-[#C8A25E]">
                        NPR {companion.hourlyRate} <span className="text-sm font-normal text-[#5A5E66]">/hr</span>
                      </span>
                      <button 
                        onClick={() => setSelectedCompanion(companion)}
                        className="px-4 py-2 border border-[#C8A25E] text-[#C8A25E] font-medium text-sm rounded-lg hover:bg-[#C8A25E] hover:text-[#0F1113] transition-colors"
                      >
                        View & Book
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'bookings' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
             <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#2A2D31] pb-4">My Bookings</h2>
             <div className="bg-[#17191C] border border-[#2A2D31] p-8 rounded-2xl flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1E2124] border border-[#2A2D31] flex items-center justify-center">
                   <Star className="w-8 h-8 text-[#8E9299]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">No active bookings</h3>
                  <p className="text-[#8E9299] mt-2">You don't have any upcoming experiences scheduled.</p>
                </div>
                <button onClick={() => setActiveTab('explore')} className="mt-4 px-6 py-2 bg-[#C8A25E] text-[#0F1113] rounded-lg font-medium hover:bg-[#B69150] transition-colors">
                  Explore Companions
                </button>
             </div>
          </motion.div>
        )}

        {activeTab === 'messages' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
             <h2 className="text-2xl font-bold text-white mb-6 border-b border-[#2A2D31] pb-4">Messages</h2>
             <div className="bg-[#17191C] border border-[#2A2D31] rounded-2xl flex overflow-hidden min-h-[500px]">
                <div className="w-1/3 border-r border-[#2A2D31] bg-[#0F1113]">
                  <div className="p-4 border-b border-[#2A2D31]">
                    <div className="bg-[#1E2124] border border-[#2A2D31] rounded-lg px-3 py-2 flex items-center gap-2">
                       <Search className="w-4 h-4 text-[#8E9299]" />
                       <input type="text" placeholder="Search chats..." className="bg-transparent border-none outline-none text-sm text-white w-full" />
                    </div>
                  </div>
                  <div className="divide-y divide-[#2A2D31]">
                     <div className="p-4 bg-[#1E2124] flex gap-3 cursor-pointer">
                        <div className="relative">
                           <img src={COMPANIONS[0].imageUrl} className="w-12 h-12 rounded-full object-cover" />
                           <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-[#1E2124] absolute bottom-0 right-0"></div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                           <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold text-white text-sm">{COMPANIONS[0].name}</span>
                              <span className="text-[10px] text-[#C8A25E]">2m ago</span>
                           </div>
                           <p className="text-xs text-[#8E9299] truncate">Looking forward to our tour tomorrow!</p>
                        </div>
                     </div>
                  </div>
                </div>
                <div className="w-2/3 bg-[#17191C] flex flex-col">
                   <div className="p-4 border-b border-[#2A2D31] flex items-center gap-3">
                      <img src={COMPANIONS[0].imageUrl} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                         <span className="font-semibold text-white block">{COMPANIONS[0].name}</span>
                         <span className="text-xs text-green-500">Online</span>
                      </div>
                   </div>
                   <div className="flex-1 p-4 flex flex-col justify-end space-y-4">
                      
                      <div className="flex gap-2 w-max max-w-[70%]">
                        <img src={COMPANIONS[0].imageUrl} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                        <div className="bg-[#1E2124] border border-[#2A2D31] rounded-2xl rounded-tl-none p-3 text-sm text-white">
                           Hi! Thanks for booking the History & Food tour. Are you okay meeting at the Patan Museum entrance?
                        </div>
                      </div>

                   </div>
                   <div className="p-4 border-t border-[#2A2D31]">
                      <div className="flex items-center gap-2 bg-[#1E2124] border border-[#2A2D31] rounded-xl p-2">
                         <input type="text" placeholder="Type a message..." className="bg-transparent text-white outline-none flex-1 px-2 text-sm" />
                         <button className="p-2 bg-[#C8A25E] text-[#0F1113] rounded-lg hover:bg-[#B69150] transition-colors font-medium text-xs uppercase tracking-wide">
                            Send
                         </button>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        )}

        {activeTab === 'about' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 max-w-3xl mx-auto">
             <h2 className="text-3xl font-light text-white mb-6 border-b border-[#2A2D31] pb-4">About <span className="font-bold">SATHI<span className="text-[#C8A25E]">.</span></span></h2>
             
             <div className="bg-[#17191C] border border-[#2A2D31] p-8 rounded-3xl space-y-6 text-[#8E9299] leading-relaxed">
                <p className="text-lg text-white">
                   SATHI is your authentic companion platform in Nepal. We believe the best way to experience the Himalayas, heritage sites, and local culture is through the eyes of a local friend.
                </p>
                <p>
                   Our platform connects travelers with KYC-verified, trusted, and knowledgeable locals for platonic cultural exchange, city tours, adventure guiding, and pure companionship.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                   <div className="p-5 bg-[#1E2124] border border-[#2A2D31] rounded-2xl">
                      <ShieldCheck className="w-8 h-8 text-[#C8A25E] mb-3" />
                      <h3 className="text-white font-semibold mb-2">Verified Safely</h3>
                      <p className="text-sm">Every companion undergoes strict identity verification and background checks.</p>
                   </div>
                   <div className="p-5 bg-[#1E2124] border border-[#2A2D31] rounded-2xl">
                      <Star className="w-8 h-8 text-[#C8A25E] mb-3" />
                      <h3 className="text-white font-semibold mb-2">Authentic Experiences</h3>
                      <p className="text-sm">From hidden street food to unspoken historical tales, discover the real Nepal.</p>
                   </div>
                </div>
             </div>
          </motion.div>
        )}

      </main>

      {/* Booking Modal */}
      {selectedCompanion && (
        <BookingModal 
          companion={selectedCompanion} 
          onClose={() => setSelectedCompanion(null)} 
          onMessage={() => {
             setSelectedCompanion(null);
             setActiveTab('messages');
          }}
        />
      )}

      {/* Story Modal */}
      {viewingStory && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setViewingStory(null)}>
            <div className="relative w-full max-w-sm aspect-[9/16] bg-[#17191C] rounded-3xl overflow-hidden border border-[#2A2D31]" onClick={e => e.stopPropagation()}>
               <img src={viewingStory.imageUrl} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
               
               <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <img src={viewingStory.userAvatar} className="w-10 h-10 rounded-full border-2 border-[#C8A25E]" />
                     <div>
                        <span className="text-white font-semibold text-sm block">{viewingStory.userName}</span>
                        <span className="text-[#8E9299] text-xs">with {viewingStory.companionName} • {viewingStory.timeAgo}</span>
                     </div>
                  </div>
                  <button onClick={() => setViewingStory(null)} className="text-white bg-black/40 rounded-full p-2 backdrop-blur-sm">✕</button>
               </div>

               {/* Left/Right Click Areas */}
               <div className="absolute inset-y-20 left-0 w-1/3 cursor-pointer" onClick={(e) => { e.stopPropagation(); const idx = STORIES.findIndex(s => s.id === viewingStory.id); if (idx > 0) setViewingStory(STORIES[idx - 1]); }}></div>
               <div className="absolute inset-y-20 right-0 w-1/3 cursor-pointer" onClick={(e) => { e.stopPropagation(); const idx = STORIES.findIndex(s => s.id === viewingStory.id); if (idx < STORIES.length - 1) setViewingStory(STORIES[idx + 1]); else setViewingStory(null); }}></div>

               <div className="absolute bottom-10 inset-x-0 p-6 flex justify-between items-end gap-2 pointer-events-none">
                  <p className="text-white text-lg font-medium shadow-sm">{viewingStory.caption}</p>
                  
                  <div className="flex gap-1 mb-1">
                    {STORIES.map((s) => (
                      <div key={s.id} className={`w-1.5 h-1.5 rounded-full ${s.id === viewingStory.id ? 'bg-white' : 'bg-white/30'}`} />
                    ))}
                  </div>
               </div>
            </div>
         </div>
      )}

      {/* Auth Modal */}
      {authMode && (
        <AuthModal 
          initialMode={authMode} 
          onClose={() => setAuthMode(null)} 
          onSuccess={(mode) => {
             if (mode === 'guide') {
                setIsGuide(true);
                setShowGuideSetup(true);
             }
          }}
        />
      )}

      {/* Safety / Verification Widget Mockup */}
      {/* <SafetyWidget /> */}
      
    </div>
  );
}

export default App;

