import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  Landmark,
  Scale,
  Speech,
  Users,
} from 'lucide-react';
import { cn } from './lib/utils';

const navItems = [
  { label: 'Tổng quan', href: '#tong-quan' },
  { label: 'Lịch sử', href: '#lich-su' },
  { label: 'Bản chất', href: '#ban-chat' },
  { label: 'Đối chiếu', href: '#doi-chieu' },
  { label: 'Không gian mạng', href: '#khong-gian-mang' },
  { label: 'Kết luận', href: '#ket-luan' },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: 'easeOut' },
};

const timeline = [
  {
    period: 'Cổ đại',
    title: 'Nền dân chủ chủ nô',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pnyx%201.jpg',
    sourceLabel: 'Wikimedia Commons - File:Pnyx 1.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pnyx_1.jpg',
    content:
      'Thuật ngữ dân chủ xuất hiện từ Hy Lạp cổ đại với hàm ý quyền lực thuộc về nhân dân, nhưng “nhân dân” khi ấy chỉ là một thiểu số thuộc giai cấp chủ nô, tăng lữ và thương gia. Đại bộ phận lao động là nô lệ không có quyền chính trị.',
  },
  {
    period: 'Phong kiến',
    title: 'Quyền lực tuyệt đối của quân chủ',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/BL%20Coronation%20Gospels.jpg',
    sourceLabel: 'Wikimedia Commons - File:BL Coronation Gospels.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:BL_Coronation_Gospels.jpg',
    content:
      'Trong xã hội phong kiến, quyền lực dân chủ bị thay thế bởi quyền lực tuyệt đối của nhà vua. Dân chúng chỉ là thần dân; quyền lực chính trị được hợp thức hóa bằng thiên mệnh và trật tự đẳng cấp.',
  },
  {
    period: 'Cận đại',
    title: 'Nền dân chủ tư sản',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Norblin%20de%20la%20Gourdaine%20-%20The%20Oath%20of%20the%20Tennis%20Court%2C%201943.804.jpg',
    sourceLabel: 'Wikimedia Commons - The Oath of the Tennis Court',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Norblin_de_la_Gourdaine_-_The_Oath_of_the_Tennis_Court,_1943.804.jpg',
    content:
      'Các cuộc cách mạng tư sản xác lập những giá trị tiến bộ như tự do, bình đẳng, bác ái và luật hóa quyền con người, quyền công dân. Tuy nhiên, nền dân chủ này vẫn đặt trên cơ sở tư hữu tư bản chủ nghĩa và phục vụ lợi ích của giai cấp tư sản.',
  },
  {
    period: 'Đương đại',
    title: 'Dân chủ xã hội chủ nghĩa',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Congress%20of%20Soviets%20%281917%29.jpg',
    sourceLabel: 'Wikimedia Commons - File:Congress of Soviets (1917).jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Congress_of_Soviets_(1917).jpg',
    content:
      'Dân chủ XHCN được xác lập sau Cách mạng Tháng Mười Nga năm 1917, kế thừa các giá trị tiến bộ trước đó nhưng chuyển quyền lực về đại đa số nhân dân lao động. Đây không chỉ là một giá trị chính trị mà còn là động lực giải phóng con người.',
    highlight: true,
  },
];

const pillars = [
  {
    icon: Landmark,
    title: 'Phương diện chính trị',
    summary:
      'Dân chủ XHCN mang bản chất giai cấp công nhân, được thực hiện thông qua sự lãnh đạo của Đảng Cộng sản và hệ thống chính trị mà trong đó mọi quyền hành thuộc về nhân dân.',
    points: [
      'Nhân dân lao động là chủ thể thực sự của quyền lực nhà nước.',
      'Nhà nước XHCN là công cụ để nhân dân thực hiện quyền làm chủ.',
      'Cán bộ, công chức phải tôn trọng, lắng nghe và phục vụ nhân dân.',
    ],
  },
  {
    icon: Building2,
    title: 'Phương diện kinh tế',
    summary:
      'Cơ sở kinh tế của dân chủ XHCN là chế độ công hữu về các tư liệu sản xuất chủ yếu, bảo đảm nguồn lực quốc gia phục vụ lợi ích toàn xã hội chứ không tích lũy vào tay thiểu số.',
    points: [
      'Dân chủ kinh tế là nền tảng của các quyền dân chủ khác.',
      'Nhân dân phải có thực quyền trong phân phối và quản lý lao động.',
      'Mục tiêu là xóa bỏ bóc lột, hướng tới công bằng và phát triển bền vững.',
    ],
  },
  {
    icon: BookOpen,
    title: 'Phương diện văn hóa - tư tưởng',
    summary:
      'Dân chủ XHCN lấy con người làm trung tâm, coi cá nhân vừa là chủ thể vừa là mục tiêu của phát triển, đồng thời nhấn mạnh trách nhiệm công dân và quá trình tự quản xã hội.',
    points: [
      'Kết hợp hệ tư tưởng Mác - Lênin với các giá trị tiến bộ của nhân loại.',
      'Nâng cao dân trí, giác ngộ chính trị, văn hóa và chuyên môn.',
      'Hướng đến sự phát triển tự do của mỗi người trong sự phát triển chung.',
    ],
  },
];

const compareRows = [
  ['Chủ thể thực quyền', 'Giai cấp tư sản, thiểu số', 'Giai cấp công nhân và nhân dân lao động, đa số'],
  ['Cơ sở kinh tế', 'Tư hữu tư liệu sản xuất', 'Công hữu đối với tư liệu sản xuất chủ yếu'],
  ['Mục đích chính trị', 'Bảo vệ trật tự và lợi ích của giai cấp tư sản', 'Giải phóng con người, xây dựng xã hội mới'],
  ['Cơ chế vận hành', 'Đa nguyên, cạnh tranh quyền lực', 'Tập trung dân chủ, có tổ chức và định hướng'],
  ['Phạm vi thực thi', 'Thiên về quyền chính trị hình thức', 'Toàn diện trên chính trị, kinh tế, văn hóa, xã hội'],
];

const criteria = [
  {
    icon: Scale,
    title: 'Thể chế hóa bằng Hiến pháp và pháp luật',
    text:
      'Quyền lực của nhân dân phải được cụ thể hóa bằng pháp luật, bằng quy chế, quyền hạn, trách nhiệm và cơ chế giám sát rõ ràng. Không cá nhân hay tổ chức nào đứng trên luật pháp.',
  },
  {
    icon: Users,
    title: 'Kết hợp dân chủ trực tiếp và gián tiếp',
    text:
      'Người dân vừa trực tiếp tham gia bàn bạc, giám sát và phản hồi ở cơ sở, vừa ủy quyền thông qua các cơ quan đại diện như Quốc hội và Hội đồng nhân dân các cấp.',
  },
  {
    icon: Speech,
    title: 'Vai trò của Mặt trận và các tổ chức chính trị - xã hội',
    text:
      'Quyền lực nhân dân chỉ mạnh khi được tổ chức thành sức mạnh hệ thống. Mặt trận và các đoàn thể có vai trò đại diện, giám sát, phản biện xã hội và tập hợp đồng thuận.',
  },
];

const socialStrengths = [
  'Mở rộng không gian dân chủ trực tiếp, giúp người dân tiếp cận thông tin và bày tỏ quan điểm nhanh hơn.',
  'Tăng cường khả năng giám sát cộng đồng đối với các vụ việc tiêu cực và phản ánh từ cơ sở.',
  'Giúp chính quyền gần dân hơn khi được sử dụng như kênh tiếp nhận phản ánh, góp ý và cung cấp dịch vụ công.',
  'Hỗ trợ tập hợp trí tuệ tập thể, tạo áp lực dư luận tích cực trong phản biện xã hội.',
];

const socialLimits = [
  'Không phải biểu hiện cao nhất của dân chủ XHCN vì bản chất dân chủ phải được thể hiện qua Nhà nước pháp quyền và các thiết chế quyền lực chính thức.',
  'Không giải quyết được nền tảng kinh tế của quyền làm chủ, đặc biệt là vấn đề sở hữu tư liệu sản xuất.',
  'Thiếu tính pháp lý cưỡng chế, nên bình luận hay kiến nghị trên mạng không đồng nghĩa với quyền lực nhà nước có hiệu lực thực thi.',
  'Có nguy cơ bị thao túng bởi thuật toán, tâm lý đám đông, thông tin sai lệch hoặc bất bình đẳng số.',
];

const recommendations = [
  'Tăng cường quản lý không gian mạng bằng pháp luật, bảo đảm tự do ngôn luận đi cùng kỷ cương và trách nhiệm.',
  'Nâng cao dân trí, văn hóa số và năng lực phản biện xây dựng cho người dùng mạng xã hội.',
  'Hoàn thiện cơ chế tiếp nhận, phản hồi và chuyển hóa các ý kiến hợp lý của người dân thành quy trình xử lý chính thức.',
  'Kiên định mục tiêu tất cả quyền lực thuộc về nhân dân, lấy sự phát triển con người làm thước đo cao nhất.',
];

const sources = [
  {
    title: 'Tạp chí Cộng sản - Cần hiểu đúng về bản chất dân chủ, nhân quyền...',
    url: 'https://www.tapchicongsan.org.vn/web/guest/dau-tranh-phan-bac-cac-luan-dieu-sai-trai-thu-dich/chi-tiet/-/asset_publisher/YqSB2JpnYto9/content/can-hieu-dung-ve-ban-chat-dan-chu-nhan-quyen-va-viec-loi-dung-dan-chu-nhan-quyen-de-chong-pha-viet-nam',
  },
  {
    title: 'Bộ Tư pháp - Về nguyên tắc tất cả quyền lực nhà nước thuộc về nhân dân',
    url: 'https://moj.gov.vn/qt/cacchuyenmuc/ctv/news/Pages/nghien-cuu-trao-doi.aspx?ItemID=10',
  },
  {
    title: 'Lý luận Chính trị - Quan điểm của Đảng về thực hành dân chủ trong thời kỳ đổi mới',
    url: 'https://lyluanchinhtri.vn/quan-diem-cua-dang-ve-thuc-hanh-dan-chu-trong-thoi-ky-doi-moi-2126.html',
  },
  {
    title: 'Quản lý nhà nước - Vai trò của mạng xã hội trong quản lý xã hội đáp ứng yêu cầu cách mạng 4.0',
    url: 'https://www.quanlynhanuoc.vn/2019/09/06/vai-tro-cua-mang-xa-hoi-trong-quan-ly-xa-hoi-dap-ung-yeu-cau-cuoc-cach-mang-4-0/',
  },
  {
    title: 'Mặt trận Tổ quốc - Sử dụng mạng xã hội giúp chính quyền gần dân',
    url: 'https://m.mattran.org.vn/hoat-dong-mat-tran-dia-phuong/su-dung-mang-xa-hoi-giup-chinh-quyen-gan-dan-10289.html',
  },
];

const aiUsageItems = [
  {
    title: 'Công cụ AI và mục đích sử dụng',
    body:
      'AI được dùng để hỗ trợ sắp xếp lại cấu trúc nội dung, gợi ý phân cấp thông tin, tinh chỉnh tiêu đề, nhịp chữ và cách trực quan hóa các luận điểm trọng tâm.',
  },
  {
    title: 'Hướng dẫn cốt lõi dành cho AI',
    body:
      'AI được định hướng theo yêu cầu: trình bày nội dung mạch lạc, làm rõ tiến trình lịch sử, bản chất dân chủ XHCN, tiêu chí quyền lực nhân dân, vai trò của không gian mạng và phần kết luận theo phong cách học thuật, dễ theo dõi.',
  },
  {
    title: 'Kết quả AI tạo ra',
    body:
      'AI hỗ trợ đề xuất cấu trúc các phần trình bày, bảng so sánh, cụm luận điểm, khối thông tin nổi bật và phụ lục để người xem tiếp cận nội dung nhanh và rõ hơn.',
  },
  {
    title: 'Khâu biên tập và hoàn thiện cuối cùng',
    body:
      'Nội dung sau khi có gợi ý từ AI được biên tập lại, rà lỗi, điều chỉnh giọng văn, bổ sung nguồn ảnh, chọn lọc lập luận và hoàn thiện bố cục để bảo đảm tính chính xác và chất lượng trình bày.',
  },
];

const integrityItems = [
  'Cam kết bằng văn bản: AI chỉ là công cụ hỗ trợ, không thay thế toàn bộ quá trình học tập, phân tích và biên soạn.',
  'Phân định rõ ràng giữa đầu ra AI và phần biên tập, tổng hợp, kiểm tra và quyết định sử dụng.',
  'Đối chiếu thông tin do AI gợi ý với giáo trình LLCT, nghị quyết, văn bản chính thống và các nguồn đã trích dẫn trên website.',
];

const officialChecks = [
  {
    title: 'Bộ Tư pháp',
    detail: 'Đối chiếu nguyên tắc tất cả quyền lực nhà nước thuộc về nhân dân và yêu cầu xây dựng Nhà nước pháp quyền XHCN.',
    url: 'https://moj.gov.vn/qt/cacchuyenmuc/ctv/news/Pages/nghien-cuu-trao-doi.aspx?ItemID=10',
  },
  {
    title: 'Tạp chí Cộng sản',
    detail: 'Đối chiếu lập luận về bản chất dân chủ, phát huy dân chủ gắn với kỷ luật, kỷ cương và vai trò của pháp luật.',
    url: 'https://www.tapchicongsan.org.vn/web/guest/dau-tranh-phan-bac-cac-luan-dieu-sai-trai-thu-dich/chi-tiet/-/asset_publisher/YqSB2JpnYto9/content/can-hieu-dung-ve-ban-chat-dan-chu-nhan-quyen-va-viec-loi-dung-dan-chu-nhan-quyen-de-chong-pha-viet-nam',
  },
  {
    title: 'Mặt trận Tổ quốc Việt Nam',
    detail: 'Đối chiếu vai trò kết nối giữa chính quyền và người dân qua không gian mạng như một công cụ hỗ trợ, không thay thế thiết chế dân chủ.',
    url: 'https://m.mattran.org.vn/hoat-dong-mat-tran-dia-phuong/su-dung-mang-xa-hoi-giup-chinh-quyen-gan-dan-10289.html',
  },
];

const currentContextItems = [
  {
    title: 'Chuyển đổi số và tiếp cận người dân',
    detail:
      'Theo Cổng Thông tin Chính phủ, TPHCM triển khai các hoạt động hưởng ứng Ngày Chuyển đổi số quốc gia năm 2025 với trọng tâm “đi từng ngõ, gõ từng nhà, hướng dẫn từng người dân sử dụng dịch vụ, ứng dụng để phát triển kinh tế số”, cho thấy việc mở rộng sự tham gia của người dân trong không gian số đang gắn chặt với quản trị công và thực tiễn đời sống.',
    url: 'https://tphcm.chinhphu.vn/tphcm-to-chuc-nhieu-hoat-dong-huong-ung-ngay-chuyen-doi-so-quoc-gia-nam-2025-101251016151123116.htm',
  },
  {
    title: 'Hoàn thiện thể chế chính quyền địa phương',
    detail:
      'Luật số 72/2025/QH15 về tổ chức chính quyền địa phương được công bố trên Báo Điện tử Chính phủ ngày 27/03/2026 phản ánh yêu cầu tiếp tục hoàn thiện bộ máy nhà nước và cơ chế vận hành quyền lực ở cấp địa phương trong bối cảnh mới.',
    url: 'https://xaydungchinhsach.chinhphu.vn/toan-van-luat-so-72-2025-qh15-to-chuc-chinh-quyen-dia-phuong-119250618161434371.htm',
  },
];

const SectionBadge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-600 shadow-sm">
    {children}
  </span>
);

const SectionHeading = ({ badge, title, description, align = 'left' }) => (
  <motion.div
    {...fadeUp}
    className={cn('mb-14 max-w-3xl', align === 'center' && 'mx-auto text-center')}
  >
    <SectionBadge>{badge}</SectionBadge>
    <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
      {title}
    </h2>
    <p className="mt-5 text-lg leading-9 text-stone-600">{description}</p>
  </motion.div>
);

const StatCard = ({ value, label }) => (
  <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
    <div className="font-serif text-4xl text-stone-900">{value}</div>
    <div className="mt-2 text-sm uppercase tracking-[0.24em] text-stone-500">{label}</div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-stone-800">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/90 bg-[#fcfbf8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6">
          <a href="#tong-quan" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-stone-300 bg-white text-stone-700 shadow-sm">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-stone-500">MLN131</div>
              <div className="font-serif text-lg text-stone-900">Dân chủ và không gian mạng</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.filter((item) => item.href !== '#lich-su').map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main>
        <section id="tong-quan" className="relative overflow-hidden pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,113,108,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(231,229,228,0.8),transparent_24%),linear-gradient(180deg,#fcfbf8_0%,#f7f4ee_42%,#fcfbf8_100%)]" />
          <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(90deg,rgba(120,113,108,0.12)_1px,transparent_1px)] bg-[length:64px_100%] opacity-[0.14]" />

          <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
            <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_0.7fr]">
              <motion.div {...fadeUp}>
                <SectionBadge>Đề tài trọng tâm</SectionBadge>
                <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.02] text-stone-900 md:text-7xl">
                  Bản chất của nền dân chủ xã hội chủ nghĩa và vai trò của không gian mạng
                </h1>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#lich-su"
                    className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-stone-50 transition-transform hover:-translate-y-0.5"
                  >
                    Xem toàn bộ mạch trình bày
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#references"
                    className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-stone-700 transition-colors hover:border-stone-500 hover:text-stone-900"
                  >
                    Tài liệu tham khảo
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.12 }}
                className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-[0_30px_100px_rgba(15,23,42,0.08)]"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-amber-300">Luận đề trung tâm</div>
                <div className="mt-8 grid gap-4">
                  {[
                    'Ba phương diện cốt lõi của dân chủ XHCN',
                    'Tiêu chí xác định quyền lực thực sự thuộc về nhân dân',
                    'Phân tích nhận định về vai trò của mạng xã hội',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-stone-700" />
                      <span className="text-sm leading-7 text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              <StatCard value="3" label="Trụ cột bản chất dân chủ XHCN" />
              <StatCard value="2" label="Khối đối chiếu trọng tâm" />
              <StatCard value="2" label="Kết luận về vai trò mạng xã hội" />
          </div>
          </div>
        </section>

        <section id="lich-su" className="bg-[#fcfbf8] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              badge="Tiến trình lịch sử"
              title="Sự tiến hóa của các hình thái dân chủ trong lịch sử nhân loại"
              description="Sự phát triển của dân chủ luôn gắn với phương thức sản xuất và đấu tranh giai cấp. Phần này giữ vai trò nền tảng, đặt bối cảnh cho toàn bộ nội dung phía sau."
              align="center"
            />

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
                {timeline.map((item, index) => {
                  return (
                    <motion.article
                      key={item.title}
                      {...fadeUp}
                      transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                      className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10"
                    >
                      <div className="space-y-5">
                        <div className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-stone-600">
                          {item.period}
                        </div>
                        <h3 className={cn('font-serif text-3xl text-stone-900', item.highlight && 'text-stone-700')}>
                          {item.title}
                        </h3>
                        <p className="text-lg leading-9 text-stone-600">
                          {item.content}
                        </p>
                      </div>

                      <div className="hidden">
                        <div className="flex h-full flex-col overflow-hidden bg-stone-50">
                          <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:flex-1">
                            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                          </div>
                          <div className="border-t border-stone-200 px-5 py-4">
                            <div className="text-[11px] uppercase tracking-[0.24em] text-stone-500">Nguồn ảnh</div>
                            <a
                              href={item.sourceUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-2 block text-sm leading-7 text-stone-700 transition-colors hover:text-stone-900"
                            >
                              {item.sourceLabel}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
        </section>

        <section id="ban-chat" className="bg-[#f7f4ee] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              badge="Bản chất dân chủ XHCN"
              title="Ba phương diện cốt lõi của nền dân chủ xã hội chủ nghĩa"
              description="Đây là nội dung trung tâm của bài trình bày, được chia thành ba phương diện lớn để người xem theo dõi rõ từng lớp lập luận."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar, index) => (
                <motion.article
                  key={pillar.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                  className="rounded-[30px] border border-stone-200 bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)]"
                >
                  <pillar.icon className="h-10 w-10 text-stone-700" />
                  <h3 className="mt-6 font-serif text-3xl leading-tight text-stone-900">{pillar.title}</h3>
                  <p className="mt-5 leading-9 text-stone-600">{pillar.summary}</p>
                  <div className="mt-6 space-y-3">
                    {pillar.points.map((point) => (
                      <div key={point} className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-stone-700" />
                        <span className="text-sm leading-7 text-stone-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="doi-chieu" className="bg-[#fcfbf8] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              badge="Đối chiếu bản chất"
              title="So sánh dân chủ tư sản và dân chủ xã hội chủ nghĩa"
              description="Bảng đối chiếu này làm nổi bật sự khác biệt cốt lõi về chủ thể quyền lực, cơ sở kinh tế và mục tiêu chính trị giữa hai mô hình dân chủ."
            />

            <motion.div
              {...fadeUp}
              className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="grid grid-cols-1 border-b border-stone-200 bg-stone-50 md:grid-cols-[1fr_1fr_1fr]">
                <div className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Tiêu chí</div>
                <div className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Dân chủ tư sản</div>
                <div className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Dân chủ XHCN</div>
              </div>
              {compareRows.map((row) => (
                <div key={row[0]} className="grid border-b border-stone-200 last:border-b-0 md:grid-cols-[1fr_1fr_1fr]">
                  <div className="px-6 py-6 font-medium text-stone-900">{row[0]}</div>
                  <div className="px-6 py-6 leading-8 text-stone-600">{row[1]}</div>
                  <div className="px-6 py-6 leading-8 text-stone-700">{row[2]}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f7f4ee] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              badge="Tiêu chí nhận diện"
              title="Khi nào có thể nói quyền lực thực sự thuộc về nhân dân?"
              description="Ba nhóm tiêu chí dưới đây giúp nhận diện quyền lực nhân dân không chỉ ở khẩu hiệu mà trong cơ chế vận hành và kiểm soát quyền lực trên thực tế."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {criteria.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                  className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <item.icon className="h-9 w-9 text-stone-700" />
                  <h3 className="mt-5 font-serif text-2xl text-stone-900">{item.title}</h3>
                  <p className="mt-4 leading-9 text-stone-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="khong-gian-mang" className="bg-[#fcfbf8] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              badge="Không gian mạng"
              title="Nhận định về mạng xã hội: đúng một phần, nhưng không phải bản chất tối cao"
              description="Phát biểu “mạng xã hội là biểu hiện cao nhất của dân chủ XHCN” chỉ phản ánh được một phần thực tế. Phần dưới đây tách rõ mặt tích cực và những giới hạn cần nhìn nhận."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div
                {...fadeUp}
                className="rounded-[30px] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-[0_18px_50px_rgba(16,185,129,0.08)]"
              >
                <div className="inline-flex rounded-full border border-emerald-400 bg-emerald-100 px-4 py-1.5 text-xs uppercase tracking-[0.26em] text-emerald-800">
                  Phần đúng
                </div>
                <h3 className="mt-5 font-serif text-3xl text-stone-900">Mạng xã hội mở rộng và hỗ trợ thực hành dân chủ</h3>
                <div className="mt-6 space-y-3">
                  {socialStrengths.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-emerald-200 bg-white px-4 py-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                      <span className="text-sm leading-7 text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 }}
                className="rounded-[30px] border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-8 shadow-[0_18px_50px_rgba(244,63,94,0.08)]"
              >
                <div className="inline-flex rounded-full border border-rose-400 bg-rose-100 px-4 py-1.5 text-xs uppercase tracking-[0.26em] text-rose-800">
                  Phần chưa đúng
                </div>
                <h3 className="mt-5 font-serif text-3xl text-stone-900">Mạng xã hội không thể thay thế bản chất dân chủ XHCN</h3>
                <div className="mt-6 space-y-3">
                  {socialLimits.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-rose-200 bg-white px-4 py-3">
                      <ChevronRight className="mt-1 h-4 w-4 flex-none text-rose-300" />
                      <span className="text-sm leading-7 text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="mt-8 rounded-[30px] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-amber-300">Kết luận học thuật</div>
                  <h3 className="mt-5 font-serif text-3xl leading-tight text-stone-900">
                    Mạng xã hội là phương tiện, không phải bản chất của quyền lực nhân dân
                  </h3>
                </div>
                <div className="space-y-4 text-lg leading-9 text-stone-600">
                  <p>
                    Biểu hiện cao nhất của dân chủ XHCN không nằm ở tính viral hay áp lực dư luận trên không gian số,
                    mà nằm ở việc quyền lực của nhân dân được thể chế hóa, được bảo đảm bằng pháp luật, được tổ chức
                    trong bộ máy nhà nước và được thực thi một cách ổn định, có hiệu lực.
                  </p>
                  <p>
                    Vì vậy, mạng xã hội chỉ phát huy ý nghĩa tích cực khi nó trở thành kênh hỗ trợ lắng nghe, phản biện,
                    giám sát và kết nối giữa chính quyền với nhân dân, chứ không bị đồng nhất với toàn bộ nền dân chủ.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="ket-luan" className="bg-[#f7f4ee] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              badge="Kết luận và khuyến nghị"
              title="Xây dựng nền dân chủ xã hội chủ nghĩa trong thời đại số"
              description="Phần kết này nhấn mạnh mối quan hệ giữa dân chủ, pháp quyền, trách nhiệm công dân và việc sử dụng công nghệ trong bối cảnh xã hội số."
            />

            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
              <motion.div
                {...fadeUp}
                className="rounded-[30px] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10"
              >
                <p className="text-xl leading-10 text-stone-600">
                  Nền dân chủ XHCN là một chỉnh thể thống nhất giữa lý luận và thực tiễn, giữa quyền lực và trách nhiệm,
                  giữa mục tiêu và phương tiện. Phát huy các tiện ích của mạng xã hội là cần thiết, nhưng không được nhầm
                  lẫn giữa công cụ truyền thông với bản chất chính trị - kinh tế của chế độ.
                </p>
                <p className="mt-6 text-lg leading-9 text-stone-600">
                  Chỉ khi Nhà nước pháp quyền XHCN hoạt động hiệu quả, quyền lực được nhân dân thực sự kiểm soát và lợi
                  ích phát triển hướng đến con người, dân chủ mới trở thành động lực mạnh mẽ cho một xã hội dân giàu,
                  nước mạnh, dân chủ, công bằng, văn minh.
                </p>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 }}
                className="rounded-[30px] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-amber-300">Giải pháp trọng tâm</div>
                <div className="mt-6 space-y-4">
                  {recommendations.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-stone-700" />
                      <span className="text-sm leading-7 text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="references" className="border-t border-stone-200 bg-[#fcfbf8] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              badge="Tài liệu tham khảo"
              title="Một số nguồn tham khảo chính"
              description="Các nguồn dưới đây là những điểm tựa quan trọng để đối chiếu lập luận về dân chủ xã hội chủ nghĩa, quyền lực nhân dân và vai trò của không gian mạng."
            />

            <div className="grid gap-4">
              {sources.map((item, index) => (
                <motion.a
                  key={item.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : undefined}
                  rel={item.url.startsWith('http') ? 'noreferrer' : undefined}
                  className="group rounded-[24px] border border-stone-200 bg-white px-6 py-5 transition-colors hover:border-stone-400"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-base leading-8 text-stone-700 group-hover:text-stone-900">{item.title}</div>
                    <ChevronRight className="mt-1 h-5 w-5 flex-none text-stone-500 transition-colors group-hover:text-stone-900" />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              id="references-note"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="mt-8 rounded-[28px] border border-stone-800 bg-stone-950/60 p-8"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-amber-300">AI Usage</div>
              <h3 className="mt-4 font-serif text-3xl text-stone-100">
                Ứng dụng AI trong quá trình xây dựng nội dung và trình bày
              </h3>
              <p className="mt-4 max-w-4xl text-base leading-8 text-stone-400">
                AI được sử dụng ở mức hỗ trợ để sắp xếp cấu trúc, gợi ý cách trình bày và rà soát diễn đạt; nội dung
                cuối cùng vẫn được kiểm tra, biên tập và quyết định thủ công.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  'Hỗ trợ tổ chức lại bố cục và nhóm luận điểm chính.',
                  'Gợi ý cách trình bày bảng, thẻ thông tin và nhịp đọc nội dung.',
                  'Toàn bộ đầu ra được đối chiếu lại với nguồn và biên tập thủ công.',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-stone-200 bg-white p-5">
                    <p className="text-sm leading-7 text-stone-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-300 bg-emerald-50 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">
                  Cam kết sử dụng AI có trách nhiệm
                </div>
                <p className="mt-4 text-sm leading-7 text-stone-700">
                  AI chỉ đóng vai trò hỗ trợ trong việc gợi ý cấu trúc, hình thức trình bày, rà soát câu chữ và đề xuất
                  cách trực quan hóa nội dung. Việc chọn lọc lập luận, đối chiếu nguồn và quyết định nội dung cuối cùng
                  được thực hiện thủ công và chịu trách nhiệm bởi người biên soạn.
                </p>
              </div>
            </motion.div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
