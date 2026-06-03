import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2347066035210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1DA851] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse group-hover:animate-none" />
      <span className="absolute right-full mr-4 bg-black/80 text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
