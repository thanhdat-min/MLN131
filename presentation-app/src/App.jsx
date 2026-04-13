import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight, ShieldAlert, Cpu, AlertTriangle,
  BookOpen, Database, Target, ArrowRight,
  MonitorSmartphone, Scale, Users, ThumbsUp, ThumbsDown,
  Menu, X
} from 'lucide-react';
import { cn } from './lib/utils';

// Reusable animated container for scroll reveals
const FadeIn = ({ children, delay = 0, className, direction = "up" }) => {
  const directions = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 }
  };

  return (
    <motion.div
      initial={directions[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// UI Components
const Badge = ({ children, className }) => {
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest", className)}>
      {children}
    </span>
  );
};

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="font-black text-2xl tracking-tighter text-white flex items-center gap-2">
        <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center">
          <Scale className="w-5 h-5 text-white" />
        </div>
        <span className="text-rose-500">MLN131</span>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
        <a href="#hero" className="hover:text-white transition-colors">Tổng Quan</a>
        <a href="#history" className="hover:text-white transition-colors">Tiến Trình</a>
        <a href="#compare" className="hover:text-white transition-colors">So Sánh</a>
        <a href="#social" className="hover:text-white transition-colors">Không Gian Mạng</a>
      </nav>
      <button className="md:hidden text-white"><Menu /></button>
    </div>
  </header>
);

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-20">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=2000&auto=format&fit=crop"
        alt="Hero Background"
        className="w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
      <div className="max-w-4xl">
        <FadeIn>
          <span className="inline-block py-1 px-3 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-bold uppercase tracking-widest mb-6">
            Chuyên Đề Trọng Điểm
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Bản Chất Dân Chủ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-600">
              & Vai Trò Của Không Gian Mạng
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-12">
            Phân tích quyền lực của nhân dân trong kỷ nguyên số dựa trên góc nhìn thực tiễn và lý luận Mác-Lênin.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a href="#history" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-rose-500 hover:text-white transition-all duration-300">
            Khám phá tiến trình lịch sử
            <ArrowRight className="w-5 h-5" />
          </a>
        </FadeIn>
      </div>

      {/* Core Values Cards Overlapping background */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
        {[
          { icon: Target, title: "Chính Trị", desc: "Quyền lực tối thượng thuộc về đại đa số nhân dân lao động.", color: "text-rose-500", border: "border-rose-500/30" },
          { icon: Database, title: "Kinh Tế", desc: "Dựa trên chế độ công hữu xã hội về tư liệu sản xuất.", color: "text-amber-500", border: "border-amber-500/30" },
          { icon: BookOpen, title: "Văn Hóa", desc: "Giải phóng và phát triển toàn diện nhân cách con người.", color: "text-emerald-500", border: "border-emerald-500/30" }
        ].map((item, i) => (
          <FadeIn key={i} delay={0.4 + (i * 0.1)}>
            <div className={cn("bg-black/50 backdrop-blur-md border p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300", item.border)}>
              <item.icon className={cn("w-10 h-10 mb-6", item.color)} />
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const HistorySection = () => {
  const timeline = [
    {
      period: "Cổ Đại",
      title: "Nền dân chủ chủ nô",
      img: "/image/nha-nuoc-chu-no.jpg",
      content: "Ra đời tại Hy Lạp cổ đại (Demoskratos). Dân chủ bị giới hạn hoàn toàn cho thiểu số là giai cấp chủ nô, tăng lữ. Lực lượng lao động chính là nô lệ bị tước đoạt toàn bộ quyền làm người, chỉ được coi là 'công cụ biết nói'."
    },
    {
      period: "Phong Kiến",
      title: "Quyền lực tuyệt đối",
      img: "/image/article.jpg",
      content: "Nhân loại bước vào quá trình lùi về dân chủ. Quyền lực tập trung vào tay một cá nhân duy nhất (Quân chủ, Vua chúa). Xã hội không tồn tại khái niệm công dân, chỉ có 'thần dân' và mệnh trời."
    },
    {
      period: "Cận Đại",
      title: "Nền dân chủ Tư sản",
      img: "/image/Giai-cap-tu-san-va-he-tu-tuong-cua-giai-cap-tu-san.jpg",
      content: "Bước tiến lịch sử thay thế thần quyền. Pháp điển hoá quyền tự do công dân, bình đẳng hình thức. Tuy nhiên, quyền lực thực chất nằm trong tay giới tinh hoa tài phiệt nắm giữ tư liệu sản xuất."
    },
    {
      period: "Đương Đại",
      title: "Dân chủ Xã hội Chủ nghĩa",
      img: "/image/image.png",
      content: "Thành tựu cao nhất mang tính thực tiễn. Đưa quyền lực trao trả về đại đa số nhân dân lao động bằng việc thay đổi tận gốc rễ cơ sở kinh tế tư hữu. Nhà nước biến thành công cụ phục vụ dân.",
      highlight: true
    }
  ];

  return (
    <section id="history" className="py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-24 text-white">
          <Badge className="mb-6 bg-white/5 border-white/10 text-white/50">Tiến trình lịch sử</Badge>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            Sự Tiến Hóa<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-500 to-rose-600 drop-shadow-[0_0_30px_rgba(225,29,72,0.3)]">
              Của Bộ Máy Quyền Lực
            </span>
          </h2>
          <p className="mt-6 text-xl text-white/50 font-light max-w-2xl mx-auto">
            Nhìn lại hành trình chuyển dịch vị thế làm chủ của nhân loại thông qua các phương thức sản xuất.
          </p>
        </FadeIn>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -ml-[1px]"></div>

          <div className="space-y-24">
            {timeline.map((node, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                  {/* Timeline Node Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-rose-500 -ml-2 z-10 shadow-[0_0_15px_rgba(225,29,72,0.6)]"></div>

                  {/* Left Column (Content vs Image depending on index) */}
                  <FadeIn
                    direction={isEven ? "right" : "left"}
                    className={cn("w-full pl-16 md:pl-0 md:w-5/12", !isEven && "md:order-2")}
                  >
                    <div className={cn("md:text-right", !isEven && "md:text-left")}>
                      <span className={cn("text-5xl font-black opacity-10 uppercase tracking-tighter absolute -z-10 -top-8",
                        isEven ? "md:right-0 right-16" : "left-16 md:left-0",
                        node.highlight && "text-rose-500 opacity-20"
                      )}>
                        {node.period}
                      </span>
                      <h4 className={cn("text-2xl font-bold text-white mb-4 uppercase tracking-wider", node.highlight && "text-rose-400")}>
                        {node.title}
                      </h4>
                      <p className="text-white/60 font-light leading-relaxed text-lg bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur">
                        {node.content}
                      </p>
                    </div>
                  </FadeIn>

                  {/* Right Column (Image vs Empty/Spacer depending on index) */}
                  <FadeIn
                    direction={isEven ? "left" : "right"}
                    className={cn("hidden md:block w-5/12", !isEven && "md:order-1")}
                  >
                    <div className="rounded-3xl overflow-hidden border border-white/10 aspect-video grayscale hover:grayscale-0 transition-all duration-700">
                      <img src={node.img} alt={node.title} className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700" />
                    </div>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const CompareSection = () => (
  <section id="compare" className="py-32 bg-black relative border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <FadeIn className="mb-20">
        <div className="max-w-3xl">
          <Badge className="bg-rose-500/10 text-rose-500 border-rose-500/20 mb-4">Đối chiếu Bản chất</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Sự Khác Biệt Trọng Yếu
          </h2>
          <p className="text-white/50 font-light text-xl leading-relaxed">
            Hai nền tảng tư tưởng dẫn đến cách phân bổ và thực thi quyền lực nhà nước khác biệt sâu sắc.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tư sản */}
        <FadeIn direction="right">
          <div className="h-full bg-white/5 rounded-3xl p-10 border border-white/10 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center mb-8 border border-white/10">
              <Scale className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-widest text-gray-300">Dân Chủ Tư Sản</h3>

            <ul className="w-full space-y-6 text-left">
              {[
                { t: "Chủ thể", d: "Giai cấp tư sản (Nhóm xã hội thiểu số)" },
                { t: "Cơ sở vật chất", d: "Dựa trên chế độ chiếm hữu tư nhân về tư liệu sản xuất" },
                { t: "Mục đích", d: "Bảo vệ tư bản, duy trì sự bóc lột sức lao động" },
                { t: "Thiết chế", d: "Đa đảng phái, cạnh tranh phiếu bầu, định hướng dư luận" }
              ].map((k, i) => (
                <li key={i} className="flex flex-col border-b border-white/5 pb-4 last:border-0">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{k.t}</span>
                  <span className="text-lg text-white font-light">{k.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* XHCN */}
        <FadeIn direction="left">
          <div className="group h-full bg-gradient-to-br from-rose-950/60 via-black to-black rounded-3xl p-10 border border-rose-500/30 flex flex-col items-center text-center shadow-[0_0_50px_rgba(225,29,72,0.1)] hover:border-rose-400 transition-all duration-500 scale-[1.02]">
            <div className="w-20 h-20 rounded-2xl bg-rose-500/20 flex items-center justify-center mb-8 border border-rose-500/30 shadow-inner group-hover:scale-110 group-hover:bg-rose-500/30 transition-all">
              <Users className="w-10 h-10 text-rose-500" />
            </div>
            <h3 className="text-3xl font-black text-white mb-10 uppercase tracking-widest text-rose-400 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">Dân Chủ XHCN</h3>

            <ul className="w-full space-y-6 text-left">
              {[
                { t: "Chủ thể", d: "Liên minh công-nông & nhân dân lao động (Đa số tuyệt đối)" },
                { t: "Cơ sở vật chất", d: "Sở hữu chung tài sản xã hội, lấy công hữu làm nòng cốt" },
                { t: "Mục đích", d: "Giải phóng giai cấp, kiến tạo công bằng xã hội hiện thực" },
                { t: "Thiết chế", d: "Đảng duy nhất lãnh đạo, tự vận động tập trung dân chủ" }
              ].map((k, i) => (
                <li key={i} className="flex flex-col border-b border-rose-500/10 pb-4 last:border-0">
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2">{k.t}</span>
                  <span className="text-lg text-white font-light group-hover:text-rose-100 transition-colors">{k.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const SocialMediaSection = () => (
  <section id="social" className="py-32 relative bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6">

      <FadeIn className="mb-16">
        <div className="max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-12 mx-auto relative overflow-hidden backdrop-blur-sm">
          <div className="absolute right-0 top-0 opacity-10 p-8"><MonitorSmartphone className="w-48 h-48" /></div>

          <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 mb-6">Quan Điểm</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
            "Chia sẻ kiến nghị viral trên MXH buộc chính quyền lắng nghe — đây là biểu hiện cao nhất của dân chủ."
          </h2>
          <div className="inline-block mt-4 inline-flex items-center gap-2 bg-rose-600 px-6 py-3 rounded-full text-white font-black uppercase tracking-widest shadow-[0_0_20px_rgba(225,29,72,0.4)]">
            Kết Luận
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 relative">
        {/* WHY TRUE */}
        <FadeIn direction="right">
          <div className="pl-6 border-l-2 border-emerald-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Tại sao phát biểu Hợp Lý?</h3>
            </div>

            <div className="space-y-8">
              {[
                { t: "Không gian kết nối trực tiếp", d: "Kênh để người dân chủ động đóng góp thông tin, tạo sự chú ý tức thì đến bộ máy quản lý nhà nước mà không cần rào cản hành chính." },
                { t: "Công cụ giám sát sắc bén", d: "Một scandal hay quan liêu địa phương có thể bị phơi bày nhanh chóng, hình thành dư luận phản biện xã hội cực mạnh buộc phải xử lý." },
                { t: "Thúc đẩy Tự do ngôn luận", d: "Biểu hiện mạnh mẽ nhất cho tự do tư tưởng, tự do chia sẻ theo hiến pháp." }
              ].map((i, k) => (
                <div key={k} className="bg-white/5 p-6 rounded-2xl">
                  <strong className="block text-emerald-400 mb-2 font-bold">{i.t}</strong>
                  <p className="text-white/60 font-light">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* WHY FALSE */}
        <FadeIn direction="left">
          <div className="pl-6 border-l-2 border-rose-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center">
                <ThumbsDown className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Vì sao chưa hoàn toàn đúng?</h3>
            </div>

            <div className="space-y-8">
              {[
                { t: "Nhầm lẫn công cụ với thể chế", d: "Mạng xã hội chỉ là phương tiện truyền thông tiện ích. Nó không phải là một nhánh quyền lực nhà nước hay thiết chế có tính cưỡng chế pháp lý." },
                { t: "Dân chủ vô chính phủ", d: "Dễ bị bóp méo cảm xúc bởi tin giả, thiếu tổ chức, không đại diện cho lợi ích chung thực sự mà có thể là sản phẩm của truyền thông đen." },
                { t: "Phụ thuôc tập đoàn công nghệ", d: "Hạ tầng lõi do tư bản kiểm soát. Thuật toán có thể loại bỏ luồng tin bất lợi, hình thành 'nô lệ công nghệ' trái với tôn chỉ dân chủ xã hội." }
              ].map((i, k) => (
                <div key={k} className="bg-white/5 p-6 rounded-2xl">
                  <strong className="block text-rose-400 mb-2 font-bold">{i.t}</strong>
                  <p className="text-white/60 font-light">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

    </div>
  </section>
);

const FooterSection = () => (
  <footer className="bg-black py-24 border-t border-white/10 text-center relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50"></div>
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-rose-600 blur-[150px] opacity-20 rounded-full pointer-events-none"></div>

    <div className="max-w-4xl mx-auto px-6 position-relative z-10">
      <FadeIn>
        <ShieldAlert className="w-16 h-16 text-white/20 mx-auto mb-8" />
        <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-6">
          Kiến Tạo Dân Chủ Số
        </h2>
        <p className="text-2xl text-white/50 font-light leading-relaxed mb-12">
          Mạng xã hội là chiếc cửa sổ. Còn ngôi nhà quyền lực đích thực phải được đúc vững bằng gạch của tư tưởng Mác-Lênin và thép của bộ máy luật pháp nghiêm minh.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm uppercase tracking-widest font-bold text-white/40">
          <span className="px-6 py-2 border border-white/10 rounded-full">Quản chế không gian trí tuệ</span>
          <span className="text-rose-500">•</span>
          <span className="px-6 py-2 border border-white/10 rounded-full">Nâng cấp văn hóa mạng</span>
        </div>
      </FadeIn>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#020202] text-white min-h-screen font-sans selection:bg-rose-500 selection:text-white">
      <Header />
      <HeroSection />
      <HistorySection />
      <CompareSection />
      <SocialMediaSection />
      <FooterSection />
    </div>
  );
}
