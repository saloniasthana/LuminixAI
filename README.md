## 🌌 Luminix AI Prototype
- Luminix AI is a modern AI-powered chat interface built as a frontend prototype to showcase clean UI/UX practices and component-driven architecture. The project demonstrates how to design an intelligent, user-friendly, and highly customizable chat system. A modern AI Chat Interface built with React + TypeScript + Vite + TailwindCSS, featuring theme management, chat session handling, accessibility improvements.
---

## 📌 Research
- **Platforms Reviewed**: OpenAI ChatGPT UI, Anthropic Claude, Poe, Perplexity.
- **Chosen Features**:
  - Model selector dropdown
  - Dark/Light theme toggle
  - Accessible keyboard navigation
  - Smooth hover/focus animations

---

## 🎨 Design
- **Tailwind Mapping**:
  - `bg-gray-900` → Dark mode container
  - `p-4` → Chat bubble padding
  - `rounded-2xl` → Bubble radius
  - `focus:ring-2` → Accessibility outlines
  - 
---

## 💻 Development

### Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **State Management**: React Context API
- **Mock API**: `/data/messages.json`
- **Storybook**: Component library with `Button`, `Slider`, `Modal`, `ChatBubble`

### Implementation Notes
- **Accessibility**: All interactive elements are keyboard-navigable with ARIA labels.
- **Animations**: Framer Motion adds micro-interactions.
- **Known Limitations**:
  - Currently using a mock API, no backend model calls.
  - Limited models hardcoded in dropdown.

---
