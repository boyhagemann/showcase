import { descriptionFont, colors } from './variables'
import Color from 'color'

export default {
  ui: {
    colors,
    maxWidth: {
      width: '1200px',
      margin: '0 10px',
    },
    navbar: {
      left: {
        width: '100%'
      },
      right: {
        align: 'left',
        width: '100%'
      },
    },
    notification: {
      positive: {
        background: colors.positive,
        text: '#fff',
        close: Color(colors.positive).lighten(0.3).string(),
      },
      negative: {
        background: colors.negative,
        text: '#fff',
        close: Color(colors.negative).lighten(0.3).string(),
      },
      info: {
        background: colors.info,
        text: '#fff',
        close: Color(colors.info).lighten(0.3).string(),
      },
      notice: {
        background: colors.notice,
        text: Color(colors.notice).darken(0.5).string(),
        close: Color(colors.notice).darken(0.3).string(),
      },
    },
    text: {
      color: colors.text,
    },
    home: {
      visual: {
        color: colors.canvas,
        background: colors.amsterdam,
      }
    },
    projects: {
      card: {
        width: '25%',
        background: colors.canvas,
        padding: '10px',
      }
    },
    nodes: {
      background: `none`,
    },
    nodeActions: {
      row: {
        background: colors.amsterdam,
        padding: '20px 0',
      },
      left: {
        width: '50%',
      },
      right: {
        textAlign: 'right',
        width: '50%',
      },
    },
    node: {
      padding: '10px 0 0',
      block: {
        background: `#fff`,
      },
      heading: {
        color: '#606c70',
      },
      content: {
        width: '100%',
        padding: '15px',
      },
      actions: {
        textAlign: 'left',
        width: '100%',
        padding: '18px 10px',
        spacing: '3px',
      }
    },
    button: {
      default: {
        background: '#fff',
        color: colors.text,
        fontSize: '1em',
        padding: '7px 12px',
        border: `1px solid #d5d8cb`
      },
      small: {
        fontSize: '0.7em',
        padding: '2px 3px',
      },
      large: {
        fontSize: '1.3em',
        padding: '10px 25px',
      },
      primary: {
        background: colors.primary,
        color: '#fff',
        border: 'none',
      },
      secondary: {
        background: colors.primary,
        color: '#fff',
        border: 'none',
      },
      tertiary: {
        background: colors.amsterdam,
        color: '#fff',
        border: 'none',
      },
      positive: {
        background: colors.positive,
        color: '#fff',
        border: 'none',
      },
      negative: {
        background: colors.negative,
        color: '#fff',
        border: 'none',
      }
    }
  },
  color: {
    default: "#fff",
    olive: "#BDCD4F",
    grape: "#9FA4C9",
    wood: "#D6603B",
  },
  app: {
    maxWidth: 1200,
  },
  navbar: {
    color: "#000",
    padding: 10,
    title: {
      color: "#fff",
      size: 40
    },
    payoff: {
      color: "#fff",
      size: 20
    },
    contact: {
      font: descriptionFont,
      color: "#fff",
      size: 28,
    }
  },
  visual: {
    content: {
      bottom: 40
    }
  },
  grid: {
    background: colors.dark,
  },
  heading: {
    size: 40
  },
  subheading: {
    size: 30,
  },
  price: {
    size: 60
  },
  text: {
    font: descriptionFont,
    size: 20,
    lineHeight: 20,
  },
  description: {
    font: descriptionFont,
    size: 24,
    lineHeight: 36,
  },
  content: {
    background: '#2F3132',
    padding: "60px 0",
  },
  info: {
    width: 1,
    padding: "20px",
    margin: {
      top: 30,
      bottom: 30,
    }
  }
}
