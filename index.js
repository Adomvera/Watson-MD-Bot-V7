function _0xe3b2(_0x43bf42,_0x30d7a1){const _0xac8965=_0xac89();return _0xe3b2=function(_0xe3b2dc,_0x59c95c){_0xe3b2dc=_0xe3b2dc-0x1dd;let _0x1c580f=_0xac8965[_0xe3b2dc];return _0x1c580f;},_0xe3b2(_0x43bf42,_0x30d7a1);}const _0x325ffe=_0xe3b2;(function(_0x8745bb,_0x40439c){const _0x3fb970=_0xe3b2,_0x4bf7a8=_0x8745bb();while(!![]){try{const _0x5c3133=-parseInt(_0x3fb970(0x1e6))/0x1*(-parseInt(_0x3fb970(0x212))/0x2)+parseInt(_0x3fb970(0x1fd))/0x3+parseInt(_0x3fb970(0x1e3))/0x4*(parseInt(_0x3fb970(0x1de))/0x5)+parseInt(_0x3fb970(0x1fb))/0x6*(-parseInt(_0x3fb970(0x1f6))/0x7)+parseInt(_0x3fb970(0x25e))/0x8+-parseInt(_0x3fb970(0x1ee))/0x9*(-parseInt(_0x3fb970(0x23f))/0xa)+parseInt(_0x3fb970(0x221))/0xb*(parseInt(_0x3fb970(0x237))/0xc);if(_0x5c3133===_0x40439c)break;else _0x4bf7a8['push'](_0x4bf7a8['shift']());}catch(_0x56ffa3){_0x4bf7a8['push'](_0x4bf7a8['shift']());}}}(_0xac89,0x269b0));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require('@whiskeysockets/baileys'),l=console[_0x325ffe(0x21d)],{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x325ffe(0x24f)),fs=require('fs'),P=require(_0x325ffe(0x263)),config=require(_0x325ffe(0x218)),qrcode=require(_0x325ffe(0x232)),util=require(_0x325ffe(0x219)),{sms,downloadMediaMessage}=require(_0x325ffe(0x23b)),axios=require(_0x325ffe(0x1e1)),{File}=require(_0x325ffe(0x272)),prefix='.',ownerNumber=[_0x325ffe(0x208)];if(!fs[_0x325ffe(0x21c)](__dirname+_0x325ffe(0x1e0))){if(!config['SESSION_ID'])return console[_0x325ffe(0x21d)](_0x325ffe(0x20d));const sessdata=config['SESSION_ID'],filer=File[_0x325ffe(0x1fc)](_0x325ffe(0x26d)+sessdata);filer['download']((_0x29c7e6,_0x4be5d)=>{const _0x5a1512=_0x325ffe;if(_0x29c7e6)throw _0x29c7e6;fs[_0x5a1512(0x246)](__dirname+_0x5a1512(0x1e0),_0x4be5d,()=>{const _0x5894a1=_0x5a1512;console['log'](_0x5894a1(0x26b));});});}const express=require(_0x325ffe(0x25a)),app=express(),port=process[_0x325ffe(0x1e7)]['PORT']||0x1f40;async function connectToWA(){const _0x4ce563=_0x325ffe;console['log'](_0x4ce563(0x243));const {state:_0x3f6e74,saveCreds:_0x50cd30}=await useMultiFileAuthState(__dirname+'/Watson_XMD/');var {version:_0x3ea108}=await fetchLatestBaileysVersion();const _0x2a84b8=makeWASocket({'logger':P({'level':_0x4ce563(0x20f)}),'printQRInTerminal':![],'browser':Browsers[_0x4ce563(0x25b)](_0x4ce563(0x1f1)),'syncFullHistory':!![],'auth':_0x3f6e74,'version':_0x3ea108});_0x2a84b8['ev']['on'](_0x4ce563(0x215),_0x19074e=>{const _0x17bfa4=_0x4ce563,{connection:_0x4a3e54,lastDisconnect:_0x5a09c2}=_0x19074e;if(_0x4a3e54===_0x17bfa4(0x227))_0x5a09c2[_0x17bfa4(0x23e)][_0x17bfa4(0x247)][_0x17bfa4(0x25f)]!==DisconnectReason[_0x17bfa4(0x24b)]&&connectToWA();else{if(_0x4a3e54==='open'){console[_0x17bfa4(0x21d)](_0x17bfa4(0x1f5));const _0x5c07e1=require('path');fs[_0x17bfa4(0x202)](_0x17bfa4(0x230))[_0x17bfa4(0x1ec)](_0x37ec7a=>{const _0x57bc38=_0x17bfa4;_0x5c07e1['extname'](_0x37ec7a)[_0x57bc38(0x1ff)]()==_0x57bc38(0x236)&&require('./plugins/'+_0x37ec7a);}),console[_0x17bfa4(0x21d)](_0x17bfa4(0x22d)),console[_0x17bfa4(0x21d)]('Bot\x20connected\x20to\x20whatsapp\x20✅');let _0x3d7469='🚀\x20*_Watson-MD-V7\x20Connected\x20Successfully!_*\x20✅\x20\x0a\x0a---\x20*🧬🎉\x20_Welcome\x20to\x20Watson-MD!_*\x20🎉🧚‍♀️\x20\x0a\x0a*🧚‍♀️🔹\x20PREFIX:*\x20<\x20'+prefix+_0x17bfa4(0x1ed)+ownerNumber+_0x17bfa4(0x235);_0x2a84b8[_0x17bfa4(0x252)](ownerNumber+_0x17bfa4(0x214),{'image':{'url':_0x17bfa4(0x1e4)},'caption':_0x3d7469});}}}),_0x2a84b8['ev']['on']('creds.update',_0x50cd30),_0x2a84b8['ev']['on']('messages.upsert',async _0xd57542=>{const _0x5a81b5=_0x4ce563;_0xd57542=_0xd57542[_0x5a81b5(0x22e)][0x0];if(!_0xd57542[_0x5a81b5(0x251)])return;_0xd57542['message']=getContentType(_0xd57542[_0x5a81b5(0x251)])===_0x5a81b5(0x223)?_0xd57542['message'][_0x5a81b5(0x223)][_0x5a81b5(0x251)]:_0xd57542[_0x5a81b5(0x251)];_0xd57542[_0x5a81b5(0x210)]&&_0xd57542[_0x5a81b5(0x210)][_0x5a81b5(0x1eb)]===_0x5a81b5(0x22b)&&config[_0x5a81b5(0x228)]==='true'&&await _0x2a84b8[_0x5a81b5(0x244)]([_0xd57542[_0x5a81b5(0x210)]]);config[_0x5a81b5(0x1ea)]==='true'&&await _0x2a84b8[_0x5a81b5(0x20e)]('🧚‍♀️𝗪𝗔𝗧𝗦𝗢𝗡\x20𝗠𝗗\x20𝗩❼🤖\x20𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆\x20𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱✓\x20𝗧𝗵𝗶𝘀\x20𝗗𝗲𝘃𝗶𝗰𝗲\x20𝗜𝘁\x20𝗛𝗮𝘃𝗲\x20𝗕𝗲𝗲𝗻\x20𝗥𝘂𝗻𝗻𝗶𝗻𝗴\x20𝗙𝗼𝗿\x20\x20'+runtime(process[_0x5a81b5(0x22f)]())+_0x5a81b5(0x255))[_0x5a81b5(0x264)](_0x61b222=>_0x61b222);config[_0x5a81b5(0x270)]===_0x5a81b5(0x1e2)?await _0x2a84b8[_0x5a81b5(0x24c)](_0x5a81b5(0x203),_0xd57542[_0x5a81b5(0x210)][_0x5a81b5(0x1eb)]):await _0x2a84b8[_0x5a81b5(0x24c)](_0x5a81b5(0x269),_0xd57542[_0x5a81b5(0x210)][_0x5a81b5(0x1eb)]);config['AUTO_TYPING']==='true'&&_0x2a84b8['sendPresenceUpdate'](_0x5a81b5(0x207),_0xd57542[_0x5a81b5(0x210)][_0x5a81b5(0x1eb)]);config['AUTO_RECORDING']===_0x5a81b5(0x1e2)&&_0x2a84b8[_0x5a81b5(0x24c)](_0x5a81b5(0x1f4),_0xd57542[_0x5a81b5(0x210)][_0x5a81b5(0x1eb)]);const _0x39adc6=sms(_0x2a84b8,_0xd57542),_0x3fa7a6=getContentType(_0xd57542[_0x5a81b5(0x251)]),_0x1b8e11=JSON[_0x5a81b5(0x256)](_0xd57542[_0x5a81b5(0x251)]),_0x48930a=_0xd57542[_0x5a81b5(0x210)][_0x5a81b5(0x1eb)],_0x31aed5=_0x3fa7a6==_0x5a81b5(0x25d)&&_0xd57542[_0x5a81b5(0x251)][_0x5a81b5(0x25d)][_0x5a81b5(0x1e5)]!=null?_0xd57542[_0x5a81b5(0x251)][_0x5a81b5(0x25d)][_0x5a81b5(0x1e5)]['quotedMessage']||[]:[],_0x5016ad=_0x3fa7a6===_0x5a81b5(0x24e)?_0xd57542[_0x5a81b5(0x251)][_0x5a81b5(0x24e)]:_0x3fa7a6==='extendedTextMessage'?_0xd57542['message'][_0x5a81b5(0x25d)][_0x5a81b5(0x254)]:_0x3fa7a6==_0x5a81b5(0x268)&&_0xd57542[_0x5a81b5(0x251)][_0x5a81b5(0x268)][_0x5a81b5(0x1f8)]?_0xd57542['message'][_0x5a81b5(0x268)][_0x5a81b5(0x1f8)]:_0x3fa7a6==_0x5a81b5(0x201)&&_0xd57542[_0x5a81b5(0x251)][_0x5a81b5(0x201)][_0x5a81b5(0x1f8)]?_0xd57542['message'][_0x5a81b5(0x201)]['caption']:'',_0x52f855=_0x5016ad[_0x5a81b5(0x242)](prefix),_0x31ae2a=_0x52f855?_0x5016ad['slice'](prefix[_0x5a81b5(0x1f7)])[_0x5a81b5(0x265)]()[_0x5a81b5(0x23d)]('\x20')[_0x5a81b5(0x225)]()[_0x5a81b5(0x1ff)]():'',_0xa51c1d=_0x5016ad[_0x5a81b5(0x265)]()[_0x5a81b5(0x23d)](/ +/)['slice'](0x1),_0x4ecdb8=_0xa51c1d[_0x5a81b5(0x200)]('\x20'),_0x2a287a=_0x48930a[_0x5a81b5(0x271)](_0x5a81b5(0x259)),_0x4cc328=_0xd57542[_0x5a81b5(0x210)]['fromMe']?_0x2a84b8[_0x5a81b5(0x205)]['id']['split'](':')[0x0]+_0x5a81b5(0x214)||_0x2a84b8['user']['id']:_0xd57542[_0x5a81b5(0x210)][_0x5a81b5(0x248)]||_0xd57542['key']['remoteJid'],_0x316cd8=_0x4cc328[_0x5a81b5(0x23d)]('@')[0x0],_0x1dbc2c=_0x2a84b8[_0x5a81b5(0x205)]['id']['split'](':')[0x0],_0x73bc52=_0xd57542[_0x5a81b5(0x25c)]||'Sin\x20Nombre',_0x157a6b=_0x1dbc2c[_0x5a81b5(0x260)](_0x316cd8),_0x50b461=ownerNumber['includes'](_0x316cd8)||_0x157a6b,_0x35bd68=await jidNormalizedUser(_0x2a84b8[_0x5a81b5(0x205)]['id']),_0x524048=_0x2a287a?await _0x2a84b8[_0x5a81b5(0x1f3)](_0x48930a)['catch'](_0x4e300b=>{}):'',_0x5186fa=_0x2a287a?_0x524048[_0x5a81b5(0x224)]:'',_0x595a51=_0x2a287a?await _0x524048[_0x5a81b5(0x26a)]:'',_0x2b8c35=_0x2a287a?await getGroupAdmins(_0x595a51):'',_0x4a2eab=_0x2a287a?_0x2b8c35[_0x5a81b5(0x260)](_0x35bd68):![],_0x5b76ea=_0x2a287a?_0x2b8c35[_0x5a81b5(0x260)](_0x4cc328):![],_0x379c6c=_0x39adc6[_0x5a81b5(0x251)][_0x5a81b5(0x1dd)]?!![]:![],_0x1ff07e=_0x8c0695=>{const _0x99dcde=_0x5a81b5;_0x2a84b8[_0x99dcde(0x252)](_0x48930a,{'text':_0x8c0695},{'quoted':_0xd57542});};_0x2a84b8[_0x5a81b5(0x238)]=async(_0x58720e,_0x401f28)=>{const _0x588dbe=_0x5a81b5;await _0x2a84b8['relayMessage'](_0x48930a,{'protocolMessage':{'key':_0x58720e[_0x588dbe(0x210)],'type':0xe,'editedMessage':{'conversation':_0x401f28}}},{});},_0x2a84b8['sendFileUrl']=async(_0x3e57bd,_0x49fde2,_0x59b0b1,_0x42572d,_0xc216ed={})=>{const _0x3f2b65=_0x5a81b5;let _0x2d6a62='',_0x119001=await axios[_0x3f2b65(0x26e)](_0x49fde2);_0x2d6a62=_0x119001[_0x3f2b65(0x21b)][_0x3f2b65(0x257)];if(_0x2d6a62[_0x3f2b65(0x23d)]('/')[0x1]===_0x3f2b65(0x245))return _0x2a84b8['sendMessage'](_0x3e57bd,{'video':await getBuffer(_0x49fde2),'caption':_0x59b0b1,'gifPlayback':!![],..._0xc216ed},{'quoted':_0x42572d,..._0xc216ed});let _0x47efbb=_0x2d6a62['split']('/')[0x0]+_0x3f2b65(0x204);if(_0x2d6a62==='application/pdf')return _0x2a84b8[_0x3f2b65(0x252)](_0x3e57bd,{'document':await getBuffer(_0x49fde2),'mimetype':_0x3f2b65(0x213),'caption':_0x59b0b1,..._0xc216ed},{'quoted':_0x42572d,..._0xc216ed});if(_0x2d6a62[_0x3f2b65(0x23d)]('/')[0x0]===_0x3f2b65(0x1fe))return _0x2a84b8[_0x3f2b65(0x252)](_0x3e57bd,{'image':await getBuffer(_0x49fde2),'caption':_0x59b0b1,..._0xc216ed},{'quoted':_0x42572d,..._0xc216ed});if(_0x2d6a62['split']('/')[0x0]==='video')return _0x2a84b8[_0x3f2b65(0x252)](_0x3e57bd,{'video':await getBuffer(_0x49fde2),'caption':_0x59b0b1,'mimetype':_0x3f2b65(0x21e),..._0xc216ed},{'quoted':_0x42572d,..._0xc216ed});if(_0x2d6a62[_0x3f2b65(0x23d)]('/')[0x0]===_0x3f2b65(0x1e8))return _0x2a84b8[_0x3f2b65(0x252)](_0x3e57bd,{'audio':await getBuffer(_0x49fde2),'caption':_0x59b0b1,'mimetype':_0x3f2b65(0x1fa),..._0xc216ed},{'quoted':_0x42572d,..._0xc216ed});};if(_0x316cd8[_0x5a81b5(0x260)](_0x5a81b5(0x208))){if(_0x379c6c)return;_0x39adc6[_0x5a81b5(0x1f0)]('👑');}if(_0x316cd8[_0x5a81b5(0x260)](_0x5a81b5(0x1f9))){if(_0x379c6c)return;_0x39adc6[_0x5a81b5(0x1f0)]('⚖️');}if(_0x316cd8[_0x5a81b5(0x260)](_0x5a81b5(0x26f))){if(_0x379c6c)return;_0x39adc6['react']('👑');}if(config[_0x5a81b5(0x249)]===_0x5a81b5(0x1e2)){const _0x4a92e3='https://raw.githubusercontent.com/manulking/MANU/main/KING/MANUl-KING';let {data:_0x574ceb}=await axios[_0x5a81b5(0x262)](_0x4a92e3);for(vr in _0x574ceb){if(new RegExp('\x5cb'+vr+'\x5cb','gi')[_0x5a81b5(0x258)](_0x5016ad))_0x2a84b8[_0x5a81b5(0x252)](_0x48930a,{'audio':{'url':_0x574ceb[vr]},'mimetype':_0x5a81b5(0x1fa),'ptt':!![]},{'quoted':_0xd57542});}}_0x52f855&&config[_0x5a81b5(0x222)]===_0x5a81b5(0x1e2)&&await _0x2a84b8[_0x5a81b5(0x244)]([_0xd57542[_0x5a81b5(0x210)]]);if(_0x5016ad===_0x5a81b5(0x1f2)||_0x5016ad===_0x5a81b5(0x231)||_0x5016ad===_0x5a81b5(0x267)||_0x5016ad===_0x5a81b5(0x20c)||_0x5016ad==='Dapan'||_0x5016ad===_0x5a81b5(0x209)||_0x5016ad===_0x5a81b5(0x211)||_0x5016ad==='Oni'||_0x5016ad===_0x5a81b5(0x253)||_0x5016ad==='Save'||_0x5016ad===_0x5a81b5(0x241)||_0x5016ad==='Ewanna'||_0x5016ad==='ewam'||_0x5016ad==='Ewam'||_0x5016ad==='sv'||_0x5016ad==='Sv'||_0x5016ad===_0x5a81b5(0x23c)||_0x5016ad===_0x5a81b5(0x233)){const _0x1337c0=JSON[_0x5a81b5(0x256)](_0xd57542[_0x5a81b5(0x251)],null,0x2),_0x41f834=JSON[_0x5a81b5(0x229)](_0x1337c0),_0xb55ee9=_0x41f834[_0x5a81b5(0x25d)][_0x5a81b5(0x1e5)][_0x5a81b5(0x1eb)];if(!_0xb55ee9)return;const _0x403a2e=_0x53f817=>{const _0x5bf2be=_0x5a81b5,_0xb7b09c={'jpg':_0x5bf2be(0x226),'png':'89504e47','mp4':_0x5bf2be(0x22c)},_0x528387=_0x53f817['toString'](_0x5bf2be(0x234),0x0,0x4);return Object['keys'](_0xb7b09c)['find'](_0x2e4936=>_0xb7b09c[_0x2e4936]===_0x528387);};if(_0x39adc6['quoted'][_0x5a81b5(0x266)]===_0x5a81b5(0x268)){var _0x229b55=getRandom('');let _0xc567a1=await _0x39adc6[_0x5a81b5(0x23a)][_0x5a81b5(0x239)](_0x229b55),_0x3e4ddb=_0x403a2e(_0xc567a1);await fs[_0x5a81b5(0x24d)][_0x5a81b5(0x246)]('./'+_0x3e4ddb,_0xc567a1);const _0x4c866b=_0x39adc6[_0x5a81b5(0x23a)][_0x5a81b5(0x268)]['caption'];await _0x2a84b8[_0x5a81b5(0x252)](_0x48930a,{'image':fs[_0x5a81b5(0x250)]('./'+_0x3e4ddb),'caption':_0x4c866b});}else{if(_0x39adc6[_0x5a81b5(0x23a)][_0x5a81b5(0x266)]===_0x5a81b5(0x201)){var _0x229b55=getRandom('');let _0x341014=await _0x39adc6[_0x5a81b5(0x23a)]['download'](_0x229b55),_0x4dbbf5=_0x403a2e(_0x341014);await fs[_0x5a81b5(0x24d)]['writeFile']('./'+_0x4dbbf5,_0x341014);const _0x2c436c=_0x39adc6[_0x5a81b5(0x23a)][_0x5a81b5(0x201)][_0x5a81b5(0x1f8)];let _0xa90679={'video':fs['readFileSync']('./'+_0x4dbbf5),'mimetype':_0x5a81b5(0x21e),'fileName':_0x39adc6['id']+_0x5a81b5(0x240),'caption':_0x2c436c,'headerType':0x4};await _0x2a84b8['sendMessage'](_0x48930a,_0xa90679,{'quoted':_0xd57542});}}}if(!_0x50b461&&config[_0x5a81b5(0x22a)]==='private')return;if(!_0x50b461&&_0x2a287a&&config[_0x5a81b5(0x22a)]===_0x5a81b5(0x1e9))return;if(!_0x50b461&&!_0x2a287a&&config[_0x5a81b5(0x22a)]===_0x5a81b5(0x220))return;const _0x4d703d=require(_0x5a81b5(0x21a)),_0x515d41=_0x52f855?_0x5016ad['slice'](0x1)[_0x5a81b5(0x265)]()['split']('\x20')[0x0][_0x5a81b5(0x1ff)]():![];if(_0x52f855){const _0x1a7f70=_0x4d703d[_0x5a81b5(0x1df)][_0x5a81b5(0x24a)](_0x22ef41=>_0x22ef41[_0x5a81b5(0x261)]===_0x515d41)||_0x4d703d[_0x5a81b5(0x1df)][_0x5a81b5(0x24a)](_0x27492e=>_0x27492e[_0x5a81b5(0x216)]&&_0x27492e[_0x5a81b5(0x216)]['includes'](_0x515d41));if(_0x1a7f70){if(_0x1a7f70['react'])_0x2a84b8[_0x5a81b5(0x252)](_0x48930a,{'react':{'text':_0x1a7f70[_0x5a81b5(0x1f0)],'key':_0xd57542['key']}});try{_0x1a7f70['function'](_0x2a84b8,_0xd57542,_0x39adc6,{'from':_0x48930a,'quoted':_0x31aed5,'body':_0x5016ad,'isCmd':_0x52f855,'command':_0x31ae2a,'args':_0xa51c1d,'q':_0x4ecdb8,'isGroup':_0x2a287a,'sender':_0x4cc328,'senderNumber':_0x316cd8,'botNumber2':_0x35bd68,'botNumber':_0x1dbc2c,'pushname':_0x73bc52,'isMe':_0x157a6b,'isOwner':_0x50b461,'groupMetadata':_0x524048,'groupName':_0x5186fa,'participants':_0x595a51,'groupAdmins':_0x2b8c35,'isBotAdmins':_0x4a2eab,'isAdmins':_0x5b76ea,'reply':_0x1ff07e});}catch(_0x57ba4b){console[_0x5a81b5(0x23e)](_0x5a81b5(0x217)+_0x57ba4b);}}}_0x4d703d[_0x5a81b5(0x1df)]['map'](async _0xe8736f=>{const _0x2e5b38=_0x5a81b5;if(_0x5016ad&&_0xe8736f['on']==='body')_0xe8736f[_0x2e5b38(0x20a)](_0x2a84b8,_0xd57542,_0x39adc6,{'from':_0x48930a,'l':l,'quoted':_0x31aed5,'body':_0x5016ad,'isCmd':_0x52f855,'command':_0xe8736f,'args':_0xa51c1d,'q':_0x4ecdb8,'isGroup':_0x2a287a,'sender':_0x4cc328,'senderNumber':_0x316cd8,'botNumber2':_0x35bd68,'botNumber':_0x1dbc2c,'pushname':_0x73bc52,'isMe':_0x157a6b,'isOwner':_0x50b461,'groupMetadata':_0x524048,'groupName':_0x5186fa,'participants':_0x595a51,'groupAdmins':_0x2b8c35,'isBotAdmins':_0x4a2eab,'isAdmins':_0x5b76ea,'reply':_0x1ff07e});else{if(_0xd57542['q']&&_0xe8736f['on']===_0x2e5b38(0x254))_0xe8736f[_0x2e5b38(0x20a)](_0x2a84b8,_0xd57542,_0x39adc6,{'from':_0x48930a,'l':l,'quoted':_0x31aed5,'body':_0x5016ad,'isCmd':_0x52f855,'command':_0xe8736f,'args':_0xa51c1d,'q':_0x4ecdb8,'isGroup':_0x2a287a,'sender':_0x4cc328,'senderNumber':_0x316cd8,'botNumber2':_0x35bd68,'botNumber':_0x1dbc2c,'pushname':_0x73bc52,'isMe':_0x157a6b,'isOwner':_0x50b461,'groupMetadata':_0x524048,'groupName':_0x5186fa,'participants':_0x595a51,'groupAdmins':_0x2b8c35,'isBotAdmins':_0x4a2eab,'isAdmins':_0x5b76ea,'reply':_0x1ff07e});else{if((_0xe8736f['on']==='image'||_0xe8736f['on']===_0x2e5b38(0x1ef))&&_0xd57542['type']==='imageMessage')_0xe8736f[_0x2e5b38(0x20a)](_0x2a84b8,_0xd57542,_0x39adc6,{'from':_0x48930a,'l':l,'quoted':_0x31aed5,'body':_0x5016ad,'isCmd':_0x52f855,'command':_0xe8736f,'args':_0xa51c1d,'q':_0x4ecdb8,'isGroup':_0x2a287a,'sender':_0x4cc328,'senderNumber':_0x316cd8,'botNumber2':_0x35bd68,'botNumber':_0x1dbc2c,'pushname':_0x73bc52,'isMe':_0x157a6b,'isOwner':_0x50b461,'groupMetadata':_0x524048,'groupName':_0x5186fa,'participants':_0x595a51,'groupAdmins':_0x2b8c35,'isBotAdmins':_0x4a2eab,'isAdmins':_0x5b76ea,'reply':_0x1ff07e});else _0xe8736f['on']===_0x2e5b38(0x20b)&&_0xd57542[_0x2e5b38(0x266)]===_0x2e5b38(0x21f)&&_0xe8736f[_0x2e5b38(0x20a)](_0x2a84b8,_0xd57542,_0x39adc6,{'from':_0x48930a,'l':l,'quoted':_0x31aed5,'body':_0x5016ad,'isCmd':_0x52f855,'command':_0xe8736f,'args':_0xa51c1d,'q':_0x4ecdb8,'isGroup':_0x2a287a,'sender':_0x4cc328,'senderNumber':_0x316cd8,'botNumber2':_0x35bd68,'botNumber':_0x1dbc2c,'pushname':_0x73bc52,'isMe':_0x157a6b,'isOwner':_0x50b461,'groupMetadata':_0x524048,'groupName':_0x5186fa,'participants':_0x595a51,'groupAdmins':_0x2b8c35,'isBotAdmins':_0x4a2eab,'isAdmins':_0x5b76ea,'reply':_0x1ff07e});}}});});}function _0xac89(){const _0x568d7c=['message','sendMessage','save','text','\x20⚡💻','stringify','content-type','test','@g.us','express','macOS','pushName','extendedTextMessage','487544QYHLWP','statusCode','includes','pattern','get','pino','catch','trim','type','Ewpm','imageMessage','unavailable','participants','Session\x20downloaded\x20✅','hey,\x20bot\x20started✅','https://mega.nz/file/','head','263789622747','ALWAYS_ONLINE','endsWith','megajs','reactionMessage','91710OxmvLe','commands','/Watson_XMD/creds.json','axios','true','4fPVkUF','https://telegra.ph/file/b7ae2db82899be94fb9c0.jpg','contextInfo','4dIQhXW','env','audio','inbox','AUTO_BIO','remoteJid','forEach','\x20>🪄⚡\x0a\x0a*🧚‍♀️🔹\x20OWNER:*\x20<\x20','382311pNHADB','photo','react','Firefox','send','groupMetadata','recording','😼\x20Installing...\x20','48174bTaNPU','length','caption','263789622747','audio/mpeg','264jqlKgi','fromURL','530736IqUWar','image','toLowerCase','join','videoMessage','readdirSync','available','Message','user','listen','composing','263789622747','dapan','function','sticker','ewpn','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','updateProfileStatus','silent','key','oni','59624gsXmxZ','application/pdf','@s.whatsapp.net','connection.update','alias','[PLUGIN\x20ERROR]\x20','./config','util','./command','headers','existsSync','log','video/mp4','stickerMessage','groups','22XThazT','READ_CMD','ephemeralMessage','subject','shift','ffd8ffe0','close','AUTO_READ_STATUS','parse','MODE','status@broadcast','00000018','Plugins\x20installed\x20successful\x20✅','messages','uptime','./plugins/','Send','qrcode-terminal','එවම්න','hex','\x20>🪄⚡\x0a\x0a\x0a_Thank\x20you\x20for\x20using_\x20*🤖Watson-MD🤖*.\x20\x0a_We\x27re\x20here\x20to\x20make\x20your\x20experience\x20enjoyable\x20and\x20seamless._\x0a_If\x20you\x20need\x20any\x20help\x20or\x20have\x20questions,\x20don\x27t\x20hesitate\x20to\x20ask._\x20🌝💗\x0a\x0a*🖇️Join\x20My\x20WhatsApp\x20Channel✓💗\x20-\x20:*\x20https://whatsapp.com/channel/0029VajjzuB9sBI890YffB1b\x0a\x0a\x0a_*🧚‍♀️Enjoy\x20your\x20time\x20with\x20us!😘*_\x0a\x0a>\x20*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝\x20𝐁𝐲\x20-\x20:\x20©𝐌𝐫\x20𝗪𝗔𝗧𝗦𝗢𝗡\x20𝗫𝗗\x20𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥\x202024👑*','.js','258072zbSage','edit','download','quoted','./lib/msg','දාන්න','split','error','10RESMgN','.mp4','ewanna','startsWith','Connecting\x20wa\x20bot\x20🧬...','readMessages','gif','writeFile','output','participant','AUTO_VOICE','find','loggedOut','sendPresenceUpdate','promises','conversation','./lib/functions','readFileSync'];_0xac89=function(){return _0x568d7c;};return _0xac89();}app[_0x325ffe(0x262)]('/',(_0x4609d9,_0x22e3d1)=>{const _0x575b01=_0x325ffe;_0x22e3d1[_0x575b01(0x1f2)](_0x575b01(0x26c));}),app[_0x325ffe(0x206)](port,()=>console[_0x325ffe(0x21d)]('Server\x20listening\x20on\x20port\x20http://localhost:'+port)),setTimeout(()=>{connectToWA();},0xfa0);
