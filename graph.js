{
    "drawflow": {
        "Home": {
            "data": {
                "2": {
                    "id": 2,
                    "name": "slack",
                    "data": {},
                    "class": "slack",
                    "html": "\n          
\n            
 Slack chat message
\n          
\n          ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "7",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "pos_x": 1028,
                    "pos_y": 87
                },
                "3": {
                    "id": 3,
                    "name": "telegram",
                    "data": {
                        "channel": "channel_2"
                    },
                    "class": "telegram",
                    "html": "\n          
\n            
 Telegram bot
\n            
\n              
Send to telegram

\n              
select channel

\n              
Channel 1
\n            
\n          
\n          ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "7",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {},
                    "pos_x": 1032,
                    "pos_y": 184
                },
                "5": {
                    "id": 5,
                    "name": "template",
                    "data": {
                        "template": "Write your template"
                    },
                    "class": "template",
                    "html": "\n            
\n              
 Template
\n              
\n                Ger Vars\n                
\n                Output template with vars\n              
\n            
\n            ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "6",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": []
                        }
                    },
                    "pos_x": 1027,
                    "pos_y": 402
                },
                "6": {
                    "id": 6,
                    "name": "github",
                    "data": {
                        "name": "https://github.com/jerosoler/Drawflow"
                    },
                    "class": "github",
                    "html": "\n          
\n            
 Github Stars
\n            
\n              
Enter repository url

\n            
\n            
\n          
\n          ",
                    "typenode": false,
                    "inputs": {},
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "5",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 606,
                    "pos_y": 424
                },
                "7": {
                    "id": 7,
                    "name": "facebook",
                    "data": {},
                    "class": "facebook",
                    "html": "\n        
\n          
 Facebook Message
\n        
\n        ",
                    "typenode": false,
                    "inputs": {},
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "2",
                                    "output": "input_1"
                                },
                                {
                                    "node": "3",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 530,
                    "pos_y": 48
                }
            }
        },
        "Other": {
            "data": {
                "8": {
                    "id": 8,
                    "name": "personalized",
                    "data": {},
                    "class": "personalized",
                    "html": "\n            
\n              Personalized\n            
\n            ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "12",
                                    "input": "output_1"
                                },
                                {
                                    "node": "12",
                                    "input": "output_2"
                                },
                                {
                                    "node": "12",
                                    "input": "output_3"
                                },
                                {
                                    "node": "12",
                                    "input": "output_4"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "9",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 764,
                    "pos_y": 227
                },
                "9": {
                    "id": 9,
                    "name": "dbclick",
                    "data": {
                        "name": "Hello World!!"
                    },
                    "class": "dbclick",
                    "html": "\n            
\n            
 Db Click
\n              
\n                Db Click here\n                
\n                  
\n                    ×\n                    Change your variable {name} !\n                    
\n                  
\n\n                
\n              
\n            
\n            ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": [
                                {
                                    "node": "8",
                                    "input": "output_1"
                                }
                            ]
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "12",
                                    "output": "input_2"
                                }
                            ]
                        }
                    },
                    "pos_x": 209,
                    "pos_y": 38
                },
                "12": {
                    "id": 12,
                    "name": "multiple",
                    "data": {},
                    "class": "multiple",
                    "html": "\n            
\n              
\n                Multiple!\n              
\n            
\n            ",
                    "typenode": false,
                    "inputs": {
                        "input_1": {
                            "connections": []
                        },
                        "input_2": {
                            "connections": [
                                {
                                    "node": "9",
                                    "input": "output_1"
                                }
                            ]
                        },
                        "input_3": {
                            "connections": []
                        }
                    },
                    "outputs": {
                        "output_1": {
                            "connections": [
                                {
                                    "node": "8",
                                    "output": "input_1"
                                }
                            ]
                        },
                        "output_2": {
                            "connections": [
                                {
                                    "node": "8",
                                    "output": "input_1"
                                }
                            ]
                        },
                        "output_3": {
                            "connections": [
                                {
                                    "node": "8",
                                    "output": "input_1"
                                }
                            ]
                        },
                        "output_4": {
                            "connections": [
                                {
                                    "node": "8",
                                    "output": "input_1"
                                }
                            ]
                        }
                    },
                    "pos_x": 179,
                    "pos_y": 272
                }
            }
        }
    }
}