var word_list = [
    {
        text: "網頁後端",
        weight: 100,
          html: {
            "data-tooltip": "80%",
            
        }
    },
    {
        text: "django",
        weight: 70,
          html: {
            "data-tooltip": "65%",
            
        }
    },
    {
        text: "jsp",
        weight: 80,
          html: {
            "data-tooltip": "75%",
            
        }
    },
    {
        text: "文字處理",
        weight: 60,
          html: {
            "data-tooltip": "55%",
            
        }
    },
    {
        text: "圖像分析",
        weight: 30,
          html: {
            "data-tooltip": "25%",
            
        }
    },
    {
        text: "Word2Vec",
        weight: 20,
          html: {
            "data-tooltip": "15%",
            
        }
    },
    {
        text: "RNN",
        weight: 20,
          html: {
            "data-tooltip": "15%",
            
        }
    },
    {
        text: "人工智慧",
        weight: 20,
          html: {
            "data-tooltip": "15%",
            
        }
    },
    {
        text: "數據分析",
        weight: 50,
        html: {
            "data-tooltip": "45%"
        }
    },
    {
        text: "網頁前端",
        weight: 60,
        html: {
            "data-tooltip": "55%"
        }
    },
    {
        text: "網頁設計",
        weight: 40,
        html: {
            "data-tooltip": "35%"
        }
    },
    {
        text: "JavaScript",
        weight: 35,
          html: {
            "data-tooltip": "30%",
            
        }
    },
    {
        text: "Jieba",
        weight: 50,
          html: {
            "data-tooltip": "45%",
            
        }
    },
    {
        text: "專案管理",
        weight: 55,
        html: {
            "data-tooltip": "50%"
        }
    },
    {
    	text: "睡覺",
        weight: 65,
        html: {
            "data-tooltip": "60%"
        }
    }
      ];
$(function () {
    $("#my_favorite_latin_words").jQCloud(word_list, {
            shape: "rectangular",
            autoResize: true
        })
       
});
