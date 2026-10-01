window.styleConfigurations = {
  "id": "c469498d-ad4f-4d41-b3c1-9006a8c69fb7",
  "name": "PORTO SEGURO_26-08-24_c469498d-ad4f-4d41-b3c1-9006a8c69fb7",
  "metadata": {
    "brandName": "PORTO SEGURO",
    "version": "1.0.0",
    "language": "pt",
    "namespace": "brand-concierge"
  },
  "behavior": {
    "multimodalCarousel": {
      "cardClickAction": "openLink"
    },
    "input": {
      "enableVoiceInput": false,
      "continuousVoiceMode": false,
      "disableMultiline": true,
      "showAiChatIcon": {
        "icon": ""
      }
    },
    "chat": {
      "messageAlignment": "normal",
      "messageWidth": "100%"
    },
    "privacyNotice": {
      "title": "Privacy Notice",
      "text": "Your use of this automated chatbot constitutes your consent that the personal information you provide in the chat session can be collected, used, disclosed, and retained by YourBrand and service providers acting on YourBrand's behalf in accordance with the YourBrand {Privacy Policy}. Please do not provide sensitive personal information (such as financial or health information) in the chatbot.",
      "links": [
        {
          "text": "Privacy Policy",
          "url": "<your-privacy-policy-url>"
        }
      ]
    },
    "meetingForm": {
      "fieldsPerRow": 2,
      "fieldLayoutRules": {
        "textInputs": {
          "allowTwoColumns": true,
          "fieldTypes": [
            "string",
            "email",
            "tel",
            "number"
          ],
          "identifyBy": null
        },
        "dropdowns": {
          "allowTwoColumns": false,
          "fieldTypes": [
            "select"
          ],
          "identifyBy": "hasOptions"
        },
        "checkboxes": {
          "allowTwoColumns": false,
          "fieldTypes": [
            "boolean",
            "checkbox"
          ],
          "identifyBy": null
        }
      },
      "title": {
        "text": "Agende um serviço",
        "alignment": "left"
      },
      "subtitle": {
        "text": "Escolha o melhor horário para você.",
        "alignment": "left"
      },
      "buttons": {
        "submit": {
          "text": "Agendar",
          "alignment": "left"
        },
        "cancel": {
          "text": "Cancel",
          "alignment": "left"
        }
      }
    },
    "calendarWidget": {
      "title": {
        "text": "Selecione um horário",
        "alignment": "left"
      },
      "subtitle": {
        "text": "Escolha um horário disponível para o serviço.",
        "alignment": "left"
      },
      "postTitle": {
        "text": "Once confirmed, you will receive a calendar invite with all the details. The specialist will already have this conversation context, so no need to repeat anything. Looking forward to connecting you with the right expert!",
        "alignment": "left"
      },
      "buttons": {
        "confirm": {
          "text": "Confirmar",
          "alignment": "left"
        },
        "cancel": {
          "text": "Cancel",
          "alignment": "left"
        }
      }
    },
    "productCard": {
      "actionButtonSize": "S"
    }
  },
  "disclaimer": {
    "text": "Os serviços são fornecidos pela PORTO SEGURO. Consulte os termos de uso.",
    "links": [
      {
        "text": "Terms of Use",
        "url": "https://www.portoseguro.com.br/termos-de-uso"
      }
    ]
  },
  "text": {
    "welcome.heading": "Bem-vindo à PORTO SEGURO",
    "welcome.subheading": "Soluções completas para sua casa e automóvel.",
    "input.placeholder": "Exemplo: Preciso de um encanador",
    "input.messageInput.aria": "Digite sua mensagem",
    "input.send.aria": "Enviar mensagem",
    "input.aiChatIcon.tooltip": "Assistente virtual",
    "input.mic.aria": "Ativar microfone",
    "card.aria.select": "Selecionar esta opção",
    "carousel.prev.aria": "Anterior",
    "carousel.next.aria": "Próximo",
    "scroll.bottom.aria": "Ir para o final",
    "error.network": "Erro de conexão. Tente novamente.",
    "loading.message": "Carregando...",
    "feedback.dialog.title.positive": "Feedback positivo",
    "feedback.dialog.title.negative": "Feedback negativo",
    "feedback.dialog.question.positive": "O que você gostou?",
    "feedback.dialog.question.negative": "O que podemos melhorar?",
    "feedback.dialog.notes": "Notas adicionais",
    "feedback.dialog.submit": "Enviar",
    "feedback.dialog.cancel": "Cancelar",
    "feedback.dialog.notes.placeholder": "Digite suas notas aqui",
    "feedback.toast.success": "Feedback enviado com sucesso!",
    "feedback.thumbsUp.aria": "Gostei",
    "feedback.thumbsDown.aria": "Não gostei",
    "feedback.title": "Nos envie seu feedback",
    "feedback.positive.title": "O que você gostou?",
    "feedback.negative.title": "O que podemos melhorar?",
    "feedback.submitButton": "Enviar",
    "feedback.positive.options": "",
    "feedback.negative.options": ""
  },
  "arrays": {
    "welcome.examples": [
      {
        "text": "Preciso de um encanador",
        "systemPrompt": "Encontre um encanador disponível na sua região.",
        "backgroundColor": "#0046c0",
        "image": "https://www.portoseguro.com.br/content/dam/vertical-servicos/catalago/servico-encanador-consertos-hidraulicos.webp"
      },
      {
        "text": "Instalar ar-condicionado",
        "systemPrompt": "Quais são os serviços disponíveis para instalação de ar-condicionado?",
        "backgroundColor": "#2662c9",
        "image": "https://www.portoseguro.com.br/content/dam/vertical-servicos/catalago/servico-instalacao-ar-condicionado.webp"
      },
      {
        "text": "Limpeza de sofá",
        "systemPrompt": "Quais são os serviços disponíveis para limpeza de sofá?",
        "backgroundColor": "#4d7ed3",
        "image": "https://www.portoseguro.com.br/content/dam/vertical-servicos/catalago/servico-limpeza-sofa.webp"
      },
      {
        "text": "Conserto de eletrodomésticos",
        "systemPrompt": "Quais são os serviços disponíveis para conserto de eletrodomésticos?",
        "backgroundColor": "#7399dc",
        "image": "https://www.portoseguro.com.br/content/dam/vertical-servicos/catalago/servico-conserto-eletrodomesticos-linha-branca.webp"
      }
    ],
    "feedback.positive.options": [
      "Serviço rápido",
      "Atendimento excelente",
      "Facilidade de uso",
      "Preços acessíveis",
      "Other"
    ],
    "feedback.negative.options": [
      "Demora no atendimento",
      "Problemas técnicos",
      "Dificuldade de navegação",
      "Preços altos",
      "Other"
    ]
  },
  "assets": {
    "icons": {
      "company": "https://www.portoseguro.com.br/favicon.ico"
    }
  },
  "visualProfile": {
    "sendIconIconColor": "#ffffff",
    "sendIconBackgroundColor": "#522752"
  },
  "theme": {
    "--welcome-input-order": "3",
    "--welcome-cards-order": "2",
    "--welcome-heading-size-desktop": "2rem",
    "--welcome-heading-size-mobile": "1.5rem",
    "--welcome-heading-weight": "700",
    "--welcome-heading-text-align": "center",
    "--welcome-subheading-size-desktop": "1.25rem",
    "--welcome-subheading-size-mobile": "1rem",
    "--welcome-subheading-text-align": "center",
    "--welcome-padding": "1.5rem",
    "--prompt-suggestion-background": "#522752",
    "--prompt-suggestion-background-hover": "#522752",
    "--prompt-suggestion-text-color": "#522752",
    "--prompt-suggestion-border-color": "#522752",
    "--font-family": "Open Sans, sans-serif",
    "--color-primary": "#0046c0",
    "--color-text": "#522752",
    "--line-height-body": "1.5",
    "--main-container-background": "#ffffff",
    "--input-height": "48px",
    "--input-height-mobile": "40px",
    "--input-border-radius": "8px",
    "--input-border-radius-mobile": "6px",
    "--input-background": "#f7f7f7",
    "--input-outline-color": "#d9d9d9",
    "--input-outline-width": "1px",
    "--input-box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    "--input-focus-outline-width": "2px",
    "--input-focus-outline-color": "#0046c0",
    "--input-font-size": "1rem",
    "--input-font-weight": "400",
    "--input-text-color": "#000000",
    "--input-button-height": "36px",
    "--input-button-width": "36px",
    "--submit-button-fill-color": "#ffffff",
    "--submit-button-fill-color-disabled": "#CCCCCC",
    "--color-button-submit": "#0046c0",
    "--color-button-submit-hover": "#522752",
    "--input-button-border-radius": "8px",
    "--button-disabled-background": "#F0F0F0",
    "--disclaimer-color": "#6c757d",
    "--disclaimer-font-size": "0.875rem",
    "--disclaimer-font-weight": "400",
    "--message-user-background": "#0046c0",
    "--message-user-text": "#ffffff",
    "--message-border-radius": "8px",
    "--message-padding": "1rem",
    "--message-concierge-background": "#f3f3f3",
    "--message-concierge-text": "#000000",
    "--message-max-width": "100%",
    "--chat-interface-max-width": "768px",
    "--message-blocker-height": "48px",
    "--loading-message-background": "#d9d9d9",
    "--loading-dot-background": "#626262",
    "--color-text-muted": "#626262",
    "--citations-text-font-weight": "400",
    "--citations-desktop-button-font-size": "0.875rem",
    "--feedback-icon-btn-background": "#f7f7f7",
    "--feedback-icon-btn-hover-background": "#e6e6e6",
    "--feedback-icon-btn-size-desktop": "36px",
    "--feedback-container-gap": "1rem",
    "--multimodal-card-box-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
    "--border-radius-card": "8px",
    "--button-height-s": "36px",
    "--button-primary-background": "#0046c0",
    "--button-primary-text": "#ffffff",
    "--button-primary-hover": "#522752",
    "--button-secondary-border": "#0046c0",
    "--button-secondary-text": "#0046c0",
    "--button-secondary-hover": "#0036a0",
    "--color-button-secondary-hover-text": "#ffffff",
    "--privacy-notice-background": "#f7f7f7",
    "--privacy-notice-padding": "1rem",
    "--privacy-notice-title-color": "#626262",
    "--privacy-notice-text-color": "#626262",
    "--privacy-notice-text-font-size": "0.875rem",
    "--privacy-notice-title-font-size": "1rem",
    "--message-concierge-link-decoration": "underline",
    "--color-secondary": "#25d366",
    "--prompt-suggestion-button-background": "#d9d9d9",
    "--prompt-pill-background": "#25d366",
    "--button-primary-mobile-background": "#522752",
    "--button-primary-mobile-hover": "#522752",
    "--main-container-mobile-background": "#ffffff",
    "--message-concierge-border-width": "1px",
    "--message-concierge-link-color": "#0046c0",
    "--prompt-suggestion-button-border-radius": "8px",
    "--prompt-suggestion-button-padding": "0.5rem 1rem",
    "--prompt-suggestions-container-gap": "0.5rem",
    "--card-background": "#25d366",
    "--card-text-font-size": "1rem",
    "--card-text-padding": "1rem",
    "--chat-container-background": "#ffffff",
    "--message-blocker-background": "#ffffff",
    "--card-text-color": "#ffffff",
    "--prompt-pill-border-color": "#25d366",
    "--prompt-pill-text-color": "#000000",
    "--prompt-suggestion-button-text-color": "#626262",
    "--prompt-suggestion-button-background-hover": "#d9d9d9",
    "--welcome-heading-text-color": "#000000",
    "--welcome-subheading-text-color": "#000000",
    "--welcome-header-order": "1",
    "--prompt-suggestions-flex-direction": "row",
    "--prompt-suggestions-flex-wrap": "wrap"
  }
};
