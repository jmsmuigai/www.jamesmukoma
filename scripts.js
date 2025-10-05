// --- Theme Switcher ---
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.querySelector('body');

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('dark');
});

// --- Chatbot Logic ---
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbot = document.getElementById('close-chatbot');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotBody = document.getElementById('chatbot-body');

chatbotToggle.addEventListener('click', () => chatbotContainer.classList.toggle('hidden'));
closeChatbot.addEventListener('click', () => chatbotContainer.classList.add('hidden'));
chatbotSend.addEventListener('click', handleUserMessage);
chatbotInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleUserMessage(); });

function handleUserMessage() {
    const userMessage = chatbotInput.value.trim(); if (!userMessage) return;
    appendMessage(userMessage, 'user'); chatbotInput.value = ''; getGeminiResponse(userMessage);
}
function appendMessage(message, sender) {
    const messageDiv = document.createElement('div'); messageDiv.textContent = message;
    messageDiv.className = sender === 'user' ? 'bg-red-600 text-white p-3 rounded-lg w-fit ml-auto mt-2' : 'text-gray-400 text-sm p-3 rounded-lg bg-gray-800 w-fit mt-2';
    chatbotBody.appendChild(messageDiv); chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

async function getGeminiResponse(userQuery) {
    appendMessage('Thinking...', 'bot');
    const systemPrompt = `You are AURA, an expert AI assistant for James Mukoma, a GeoAI specialist. Your goal is to help potential clients (like WFP, UNHCR, USAID) understand his work. 
    - His consultancy is AURA Intelligence.
    - He specializes in building automated AI ecosystems using Google Cloud, GEE, and Gemini.
    - His key projects in Garissa County include: Project Sentinel (Flood/Drought EWS), Project Verdant (Rangelands/Livestock AI), Project TerraForm (Invasive Species), Project Harvest (Soil/Crop AI), Project Shirika (Refugee Integration), and Project Atlas (Living Atlas).
    - He offers services for organizations and individuals.
    - Be helpful, professional, and concise. You can answer in English or Swahili. Keep responses under 80 words.`;
    
    const apiKey = "AIzaSyDDZludrLe0owCB3jFvPWSp8b3ZBx5hBmQ"; // Leave blank
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    const payload = { contents: [{ parts: [{ text: userQuery }] }], systemInstruction: { parts: [{ text: systemPrompt }] }, };

    try {
        const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) { throw new Error(`API error: ${response.statusText}`); }
        const result = await response.json();
        const botMessage = result.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble connecting right now.";
        chatbotBody.removeChild(chatbotBody.lastChild); 
        appendMessage(botMessage, 'bot');
    } catch (error) {
        console.error("Gemini API call failed:", error);
        chatbotBody.removeChild(chatbotBody.lastChild);
        appendMessage("Sorry, I encountered an error. Please check the console for details.", 'bot');
    }
}