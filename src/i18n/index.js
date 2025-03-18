// Import Vue I18n creator
import { createI18n } from 'vue-i18n'

// Define messages for each supported language
const messages = {
  en: {
    navigation: {
      dashboard: 'Dashboard',
      formBuilder: 'Form Builder',
      components: 'Components',
      users: 'Users',
      reports: 'Reports',
      documents: 'Documents',
      calendar: 'Calendar',
      orders: 'Orders',
      profile: 'Profile',
      settings: 'Settings'
    },
    auth: {
      email: 'Email',
      password: 'Password',
      signIn: 'Sign in',
      enterEmail: 'Enter your email',
      enterPassword: 'Enter your password'
    },
    stats: {
      totalRevenue: 'Total Revenue',
      activeUsers: 'Active Users',
      sales: 'Sales',
      conversionRate: 'Conversion Rate',
      vsLastMonth: 'vs last month'
    },
    form: {
      sampleForm: 'Sample Form',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      userType: 'User Type',
      notifications: 'Enable notifications',
      saveChanges: 'Save Changes',
      userTypes: {
        admin: 'Administrator',
        user: 'Regular User',
        guest: 'Guest'
      }
    },
    activity: {
      recentActivity: 'Recent Activity',
      createdPost: 'Created a new post',
      updatedProfile: 'Updated profile',
      completedTask: 'Completed task',
      addedComment: 'Added comment',
      fiveMinutes: '5 minutes ago',
      tenMinutes: '10 minutes ago',
      oneHour: '1 hour ago',
      twoHours: '2 hours ago'
    },
    formBuilder: {
      title: 'Form Builder',
      availableElements: 'Available Elements',
      formPreview: 'Form Preview',
      formJson: 'Form JSON',
      dragElements: 'Drag elements here to start building your form',
      copy: 'Copy',
      copied: 'Copied!',
      editLabel: 'Edit label',
      removeElement: 'Remove element',
      enterNewLabel: 'Enter new label',
      elements: {
        text: 'Text Input',
        number: 'Number Input',
        email: 'Email Input',
        textarea: 'Text Area',
        select: 'Select',
        checkbox: 'Checkbox',
        radio: 'Radio Group'
      },
      placeholders: {
        text: 'Enter text...',
        number: '0',
        email: 'user@example.com',
        textarea: 'Enter long text...'
      },
      option1: 'Option 1',
      option2: 'Option 2',
      option3: 'Option 3'
    },
    components: {
      sections: {
        buttons: 'Buttons',
        table: 'Table',
        modalSlideOver: 'Modal & SlideOver'
      },
      buttons: {
        primary: 'Primary Button',
        secondary: 'Secondary Button',
        outline: 'Outline Button',
        text: 'Text Button',
        small: 'Small Button',
        medium: 'Medium Button',
        large: 'Large Button',
        openModal: 'Open Modal',
        openSlideOver: 'Open SlideOver',
        cancel: 'Cancel',
        confirm: 'Confirm'
      },
      table: {
        id: 'ID',
        name: 'Name',
        email: 'Email',
        role: 'Role',
        roles: {
          admin: 'Admin',
          user: 'User',
          editor: 'Editor'
        }
      },
      modal: {
        title: 'Example Modal',
        content: 'This is a modal dialog'
      },
      slideOver: {
        title: 'Example SlideOver',
        content: 'This is a slide over panel'
      }
    },
    notFound: {
      title: '404 - Page Not Found',
      message: "The page you're looking for is under construction or doesn't exist",
      returnToDashboard: 'Return to Dashboard'
    },
    language: {
      select: 'Select Language',
      en: 'English',
      es: 'Spanish'
    },
    search: 'Search...',
    profile: {
      description: 'Manage your profile settings here'
    },
    reports: {
      title: 'Sales Reports',
      timePeriod: 'Time Period',
      periods: {
        daily: 'Daily',
        weekly: 'Weekly',
        monthly: 'Monthly',
        yearly: 'Yearly'
      },
      charts: {
        salesTrend: 'Sales Trend',
        revenueByCategory: 'Revenue by Category',
        weeklyRevenue: 'Weekly Revenue',
        trafficSources: 'Traffic Sources'
      },
      metrics: {
        title: 'Key Performance Metrics',
        totalSales: 'Total Sales',
        averageOrder: 'Average Order Value',
        conversionRate: 'Conversion Rate',
        satisfaction: 'Customer Satisfaction',
        vsLastMonth: 'vs last month'
      }
    },
    calendar: {
      title: 'Calendar',
      weekdays: {
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri',
        sat: 'Sat',
        sun: 'Sun'
      },
      events: {
        title: 'Events for',
        noEvents: 'No events scheduled',
        types: {
          work: 'Work',
          deadline: 'Deadline',
          personal: 'Personal'
        }
      }
    }
  },
  es: {
    navigation: {
      dashboard: 'Panel',
      formBuilder: 'Constructor de Formularios',
      components: 'Componentes',
      users: 'Usuarios',
      reports: 'Reportes',
      documents: 'Documentos',
      calendar: 'Calendario',
      orders: 'Órdenes',
      profile: 'Perfil',
      settings: 'Configuración'
    },
    auth: {
      email: 'Correo',
      password: 'Contraseña',
      signIn: 'Iniciar sesión',
      enterEmail: 'Ingrese su correo',
      enterPassword: 'Ingrese su contraseña'
    },
    stats: {
      totalRevenue: 'Ingresos Totales',
      activeUsers: 'Usuarios Activos',
      sales: 'Ventas',
      conversionRate: 'Tasa de Conversión',
      vsLastMonth: 'vs mes anterior'
    },
    form: {
      sampleForm: 'Formulario de Ejemplo',
      fullName: 'Nombre Completo',
      emailAddress: 'Correo Electrónico',
      userType: 'Tipo de Usuario',
      notifications: 'Activar notificaciones',
      saveChanges: 'Guardar Cambios',
      userTypes: {
        admin: 'Administrador',
        user: 'Usuario Regular',
        guest: 'Invitado'
      }
    },
    activity: {
      recentActivity: 'Actividad Reciente',
      createdPost: 'Creó una nueva publicación',
      updatedProfile: 'Actualizó el perfil',
      completedTask: 'Completó la tarea',
      addedComment: 'Agregó un comentario',
      fiveMinutes: 'hace 5 minutos',
      tenMinutes: 'hace 10 minutos',
      oneHour: 'hace 1 hora',
      twoHours: 'hace 2 horas'
    },
    formBuilder: {
      title: 'Constructor de Formularios',
      availableElements: 'Elementos Disponibles',
      formPreview: 'Vista Previa',
      formJson: 'JSON del Formulario',
      dragElements: 'Arrastra elementos aquí para comenzar a construir tu formulario',
      copy: 'Copiar',
      copied: '¡Copiado!',
      editLabel: 'Editar etiqueta',
      removeElement: 'Eliminar elemento',
      enterNewLabel: 'Ingrese nueva etiqueta',
      elements: {
        text: 'Campo de Texto',
        number: 'Campo Numérico',
        email: 'Campo de Correo',
        textarea: 'Área de Texto',
        select: 'Selector',
        checkbox: 'Casilla de Verificación',
        radio: 'Grupo de Radio'
      },
      placeholders: {
        text: 'Ingrese texto...',
        number: '0',
        email: 'usuario@ejemplo.com',
        textarea: 'Ingrese texto largo...'
      },
      option1: 'Opción 1',
      option2: 'Opción 2',
      option3: 'Opción 3'
    },
    components: {
      sections: {
        buttons: 'Botones',
        table: 'Tabla',
        modalSlideOver: 'Modal y Panel Lateral'
      },
      buttons: {
        primary: 'Botón Primario',
        secondary: 'Botón Secundario',
        outline: 'Botón Contorno',
        text: 'Botón Texto',
        small: 'Botón Pequeño',
        medium: 'Botón Mediano',
        large: 'Botón Grande',
        openModal: 'Abrir Modal',
        openSlideOver: 'Abrir Panel',
        cancel: 'Cancelar',
        confirm: 'Confirmar'
      },
      table: {
        id: 'ID',
        name: 'Nombre',
        email: 'Correo',
        role: 'Rol',
        roles: {
          admin: 'Administrador',
          user: 'Usuario',
          editor: 'Editor'
        }
      },
      modal: {
        title: 'Modal de Ejemplo',
        content: 'Este es un diálogo modal'
      },
      slideOver: {
        title: 'Panel Lateral de Ejemplo',
        content: 'Este es un panel lateral'
      }
    },
    notFound: {
      title: '404 - Página No Encontrada',
      message: 'La página que buscas está en construcción o no existe',
      returnToDashboard: 'Volver al Panel'
    },
    language: {
      select: 'Seleccionar Idioma',
      en: 'Inglés',
      es: 'Español'
    },
    search: 'Buscar...',
    profile: {
      description: 'Administra la configuración de tu perfil aquí'
    },
    reports: {
      title: 'Reportes de Ventas',
      timePeriod: 'Período de Tiempo',
      periods: {
        daily: 'Diario',
        weekly: 'Semanal',
        monthly: 'Mensual',
        yearly: 'Anual'
      },
      charts: {
        salesTrend: 'Tendencia de Ventas',
        revenueByCategory: 'Ingresos por Categoría',
        weeklyRevenue: 'Ingresos Semanales',
        trafficSources: 'Fuentes de Tráfico'
      },
      metrics: {
        title: 'Métricas Clave de Rendimiento',
        totalSales: 'Ventas Totales',
        averageOrder: 'Valor Promedio de Orden',
        conversionRate: 'Tasa de Conversión',
        satisfaction: 'Satisfacción del Cliente',
        vsLastMonth: 'vs mes anterior'
      }
    },
    calendar: {
      title: 'Calendario',
      weekdays: {
        mon: 'Lun',
        tue: 'Mar',
        wed: 'Mié',
        thu: 'Jue',
        fri: 'Vie',
        sat: 'Sáb',
        sun: 'Dom'
      },
      events: {
        title: 'Eventos para',
        noEvents: 'No hay eventos programados',
        types: {
          work: 'Trabajo',
          deadline: 'Fecha Límite',
          personal: 'Personal'
        }
      }
    }
  }
}

// Create and export i18n instance
export const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en', // Default locale
  fallbackLocale: 'en', // Fallback locale if translation is missing
  messages, // Translation messages
  globalInjection: true // Enable global injection
})