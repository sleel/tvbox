var rule = {
    title: '菜狗',
    host: 'https://waptv.sogou.com',
    homeUrl: '',
    searchUrl: '/film/result?ie=utf8&query=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    multi: 1,
    // 分类链接fypage参数支持1个()表达式
    url: '/napi/video/classlist?abtest=0&iploc=CN1304&spver=&listTab=fyclass&filter=&start=((fypage-1)*15)&len=15&fr=filter',
    filter_url: 'style={{fl.style}}&zone={{fl.zone}}&year={{fl.year}}&fee={{fl.fee}}&order={{fl.order}}',
    headers: {
        'User-Agent': 'PC_UA'
    },
    timeout: 5000,
    class_name: '电视剧&电影&动漫&综艺&纪录片',
    class_url: 'teleplay&film&cartoon&tvshow&documentary',
    filter: { 'teleplay': [{ 'key': 'style', 'name': '类型', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '爱情', 'v': '爱情' }, { 'n': '喜剧', 'v': '喜剧' }, { 'n': '都市', 'v': '都市' }, { 'n': '悬疑', 'v': '悬疑' }, { 'n': '古装', 'v': '古装' }, { 'n': '偶像', 'v': '偶像' }, { 'n': '犯罪', 'v': '犯罪' }, { 'n': '历史', 'v': '历史' }, { 'n': '战争', 'v': '战争' }, { 'n': '武侠', 'v': '武侠' }, { 'n': '警匪', 'v': '警匪' }, { 'n': '科幻', 'v': '科幻' }, { 'n': '奇幻', 'v': '奇幻' }, { 'n': '谍战', 'v': '谍战' }, { 'n': '农村', 'v': '农村' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'zone', 'name': '地区', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '内地', 'v': '内地' }, { 'n': '香港', 'v': '香港' }, { 'n': '台湾', 'v': '台湾' }, { 'n': '韩国', 'v': '韩国' }, { 'n': '泰国', 'v': '泰国' }, { 'n': '日本', 'v': '日本' }, { 'n': '美国', 'v': '美国' }, { 'n': '英国', 'v': '英国' }, { 'n': '新加坡', 'v': '新加坡' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'year', 'name': '年代', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '2025', 'v': '2025' }, { 'n': '2024', 'v': '2024' }, { 'n': '2023', 'v': '2023' }, { 'n': '2022', 'v': '2022' }, { 'n': '2021', 'v': '2021' }, { 'n': '2020', 'v': '2020' }, { 'n': '2019', 'v': '2019' }, { 'n': '2018', 'v': '2018' }, { 'n': '2017', 'v': '2017' }, { 'n': '2016', 'v': '2016' }, { 'n': '2015', 'v': '2015' }, { 'n': '2014', 'v': '2014' }, { 'n': '更早', 'v': '更早' }] }, { 'key': 'fee', 'name': '资源', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '正片', 'v': '正片' }, { 'n': '免费正片', 'v': '免费正片' }, { 'n': '付费正片', 'v': '付费正片' }] }, { 'key': 'order', 'name': '排序', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '最新', 'v': '最新' }, { 'n': '好评', 'v': '好评' }] }], 'film': [{ 'key': 'style', 'name': '类型', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '喜剧', 'v': '喜剧' }, { 'n': '爱情', 'v': '爱情' }, { 'n': '动作', 'v': '动作' }, { 'n': '恐怖', 'v': '恐怖' }, { 'n': '科幻', 'v': '科幻' }, { 'n': '惊悚', 'v': '惊悚' }, { 'n': '犯罪', 'v': '犯罪' }, { 'n': '奇幻', 'v': '奇幻' }, { 'n': '战争', 'v': '战争' }, { 'n': '悬疑', 'v': '悬疑' }, { 'n': '动画', 'v': '动画' }, { 'n': '文艺', 'v': '文艺' }, { 'n': '传记', 'v': '传记' }, { 'n': '歌舞', 'v': '歌舞' }, { 'n': '古装', 'v': '古装' }, { 'n': '警匪', 'v': '警匪' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'zone', 'name': '地区', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '内地', 'v': '内地' }, { 'n': '香港', 'v': '香港' }, { 'n': '台湾', 'v': '台湾' }, { 'n': '韩国', 'v': '韩国' }, { 'n': '泰国', 'v': '泰国' }, { 'n': '日本', 'v': '日本' }, { 'n': '美国', 'v': '美国' }, { 'n': '英国', 'v': '英国' }, { 'n': '新加坡', 'v': '新加坡' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'year', 'name': '年代', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '2025', 'v': '2025' }, { 'n': '2024', 'v': '2024' }, { 'n': '2023', 'v': '2023' }, { 'n': '2022', 'v': '2022' }, { 'n': '2021', 'v': '2021' }, { 'n': '2020', 'v': '2020' }, { 'n': '2019', 'v': '2019' }, { 'n': '2018', 'v': '2018' }, { 'n': '2017', 'v': '2017' }, { 'n': '2016', 'v': '2016' }, { 'n': '2015', 'v': '2015' }, { 'n': '2014', 'v': '2014' }, { 'n': '更早', 'v': '更早' }] }, { 'key': 'fee', 'name': '资源', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '正片', 'v': '正片' }, { 'n': '免费正片', 'v': '免费正片' }, { 'n': '付费正片', 'v': '付费正片' }] }, { 'key': 'order', 'name': '排序', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '最新', 'v': '最新' }, { 'n': '好评', 'v': '好评' }] }], 'cartoon': [{ 'key': 'style', 'name': '类型', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '搞笑', 'v': '搞笑' }, { 'n': '热血', 'v': '热血' }, { 'n': '冒险', 'v': '冒险' }, { 'n': '美少女', 'v': '美少女' }, { 'n': '科幻', 'v': '科幻' }, { 'n': '校园', 'v': '校园' }, { 'n': '恋爱', 'v': '恋爱' }, { 'n': '神魔', 'v': '神魔' }, { 'n': '机战', 'v': '机战' }, { 'n': '益智', 'v': '益智' }, { 'n': '亲子', 'v': '亲子' }, { 'n': '励志', 'v': '励志' }, { 'n': '童话', 'v': '童话' }, { 'n': '青春', 'v': '青春' }, { 'n': '原创', 'v': '原创' }, { 'n': '动作', 'v': '动作' }, { 'n': '耽美', 'v': '耽美' }, { 'n': '魔幻', 'v': '魔幻' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'zone', 'name': '地区', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '日本', 'v': '日本' }, { 'n': '欧美', 'v': '欧美' }, { 'n': '国产', 'v': '国产' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'year', 'name': '年代', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '2025', 'v': '2025' }, { 'n': '2024', 'v': '2024' }, { 'n': '2023', 'v': '2023' }, { 'n': '2022', 'v': '2022' }, { 'n': '2021', 'v': '2021' }, { 'n': '2020', 'v': '2020' }, { 'n': '2019', 'v': '2019' }, { 'n': '2018', 'v': '2018' }, { 'n': '2017', 'v': '2017' }, { 'n': '2016', 'v': '2016' }, { 'n': '2015', 'v': '2015' }, { 'n': '2014', 'v': '2014' }, { 'n': '更早', 'v': '更早' }] }, { 'key': 'fee', 'name': '资源', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '正片', 'v': '正片' }, { 'n': '免费正片', 'v': '免费正片' }, { 'n': '付费正片', 'v': '付费正片' }] }, { 'key': 'order', 'name': '排序', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '最新', 'v': '最新' }, { 'n': '好评', 'v': '好评' }] }], 'tvshow': [{ 'key': 'style', 'name': '类型', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '真人秀', 'v': '真人秀' }, { 'n': '生活', 'v': '生活' }, { 'n': '搞笑', 'v': '搞笑' }, { 'n': '访谈', 'v': '访谈' }, { 'n': '时尚', 'v': '时尚' }, { 'n': '音乐', 'v': '音乐' }, { 'n': '选秀', 'v': '选秀' }, { 'n': '美食', 'v': '美食' }, { 'n': '游戏', 'v': '游戏' }, { 'n': '纪实', 'v': '纪实' }, { 'n': '旅游', 'v': '旅游' }, { 'n': '情感', 'v': '情感' }, { 'n': '恶搞', 'v': '恶搞' }, { 'n': '吐槽', 'v': '吐槽' }, { 'n': '原创', 'v': '原创' }, { 'n': '歌舞', 'v': '歌舞' }, { 'n': '播报', 'v': '播报' }, { 'n': '曲艺', 'v': '曲艺' }, { 'n': '科教', 'v': '科教' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'zone', 'name': '地区', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '内地', 'v': '内地' }, { 'n': '台湾', 'v': '台湾' }, { 'n': '日韩', 'v': '日韩' }, { 'n': '欧美', 'v': '欧美' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'emcee', 'name': '明星', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '何炅', 'v': '何炅' }, { 'n': '撒贝宁', 'v': '撒贝宁' }, { 'n': '王筱磊', 'v': '王筱磊' }, { 'n': '张绍刚', 'v': '张绍刚' }, { 'n': '鲁健', 'v': '鲁健' }, { 'n': '王世林', 'v': '王世林' }, { 'n': '倪萍', 'v': '倪萍' }, { 'n': '汪涵', 'v': '汪涵' }, { 'n': '舒冬', 'v': '舒冬' }, { 'n': '齐思钧', 'v': '齐思钧' }, { 'n': '白岩松', 'v': '白岩松' }, { 'n': '曲洪禹', 'v': '曲洪禹' }, { 'n': '康辉', 'v': '康辉' }, { 'n': '章亭', 'v': '章亭' }, { 'n': '刘洪悦', 'v': '刘洪悦' }, { 'n': '尼格买提', 'v': '尼格买提' }, { 'n': '钱枫', 'v': '钱枫' }, { 'n': '刘婧', 'v': '刘婧' }, { 'n': '赵川', 'v': '赵川' }, { 'n': '谢娜', 'v': '谢娜' }] }, { 'key': 'order', 'name': '排序', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '最新', 'v': '最新' }, { 'n': '好评', 'v': '好评' }] }], 'documentary': [{ 'key': 'style', 'name': '类型', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '历史', 'v': '历史' }, { 'n': '自然', 'v': '自然' }, { 'n': '动物', 'v': '动物' }, { 'n': '社会', 'v': '社会' }, { 'n': '传记', 'v': '传记' }, { 'n': '人文', 'v': '人文' }, { 'n': '文化', 'v': '文化' }, { 'n': '军事', 'v': '军事' }, { 'n': '科技', 'v': '科技' }, { 'n': '人物', 'v': '人物' }, { 'n': '探索', 'v': '探索' }, { 'n': '美食', 'v': '美食' }, { 'n': '旅行', 'v': '旅行' }, { 'n': '探险', 'v': '探险' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'zone', 'name': '地区', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '内地', 'v': '内地' }, { 'n': '香港', 'v': '香港' }, { 'n': '台湾', 'v': '台湾' }, { 'n': '韩国', 'v': '韩国' }, { 'n': '泰国', 'v': '泰国' }, { 'n': '日本', 'v': '日本' }, { 'n': '美国', 'v': '美国' }, { 'n': '英国', 'v': '英国' }, { 'n': '新加坡', 'v': '新加坡' }, { 'n': '其他', 'v': '其他' }] }, { 'key': 'year', 'name': '年代', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '2025', 'v': '2025' }, { 'n': '2024', 'v': '2024' }, { 'n': '2023', 'v': '2023' }, { 'n': '2022', 'v': '2022' }, { 'n': '2021', 'v': '2021' }, { 'n': '2020', 'v': '2020' }, { 'n': '2019', 'v': '2019' }, { 'n': '2018', 'v': '2018' }, { 'n': '2017', 'v': '2017' }, { 'n': '2016', 'v': '2016' }, { 'n': '2015', 'v': '2015' }, { 'n': '2014', 'v': '2014' }, { 'n': '更早', 'v': '更早' }] }, { 'key': 'fee', 'name': '资源', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '正片', 'v': '正片' }, { 'n': '免费正片', 'v': '免费正片' }, { 'n': '付费正片', 'v': '付费正片' }] }, { 'key': 'order', 'name': '排序', 'value': [{ 'n': '全部', 'v': '' }, { 'n': '最新', 'v': '最新' }, { 'n': '好评', 'v': '好评' }] }] },
    limit: 20,
    play_parse: true,
    play_json: 1,
    // 手动调用解析请求json的url,此lazy不方便
    lazy: '',
    lazy: `js:
    print(input);
    fetch_params.headers["User-Agent"]=MOBILE_UA;
    print(fetch_params);
    let html=request(input);
    let rurl=html.match(/window\\.open\\('(.*?)',/)[1];
    rurl=urlDeal(rurl);
    input={parse:1,jx:1,url:rurl};
    `,
    // 推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级: 'js:let d=[];let html=request(input);html=JSON.parse(html);let list=html.listData.results;list.forEach(function(it){let desc1=it.ipad_play_for_list.finish_episode?it.ipad_play_for_list.episode===it.ipad_play_for_list.finish_episode?"全集"+it.ipad_play_for_list.finish_episode:"连载"+it.ipad_play_for_list.episode+"/"+it.ipad_play_for_list.finish_episode:"";let desc2=it.score?"评分:"+it.score:"";let desc3=it.date?"更至:"+it.date:"";d.push({title:it.name,img:it.v_picurl,url:"https://v.sogou.com"+it.url.replace("teleplay","series").replace("cartoon","series"),desc:desc1||desc2||desc3})});setResult(d);',
    二级: '',
    二级: 'js:VOD={};let html=request(input);function adhead(url){let hd="https://v.sogou.com";if(!url.startsWith(hd)){url=hd+url}return urlencode(url)}try{let json=JSON.parse(html.match(/INITIAL_STATE.*?({.*});/)[1]).detail.itemData;let key=json.dockey;let name=json.name;let zone=json.zone;let score=json.score?json.score:"暂无";let style=json.style;let emcee=json.emcee?"主持："+json.emcee:json.name;let director=json.director?"导演："+json.director:name;director=director.replace(/;/g,"\\t");let starring=json.starring?"演员："+json.starring:"声优："+json.shengyou;starring=starring.replace(/.*undefined/,"").replace(/;/g,"\\t");let update=json.update_wordstr?json.update_wordstr:"";let tv_station=json.tv_station?json.tv_station:zone;let introduction=json.introduction;let shengyou=json.shengyou;let shows=json.play_from_open_index;let plays=json.play.item_list;if(shows){VOD.vod_name=name;VOD.vod_area=emcee+","+tv_station;VOD.vod_director=director;VOD.vod_actor=starring;VOD.vod_pic=jsp.pd(html,"#thumb_img&&img&&src");VOD.vod_remarks=style+" 评分:"+score+","+update;VOD.vod_content=introduction}else{VOD.vod_name=name;VOD.vod_director=director;VOD.vod_actor=starring;VOD.vod_pic=jsp.pd(html,"#thumb_img&&img&&src");VOD.vod_content=introduction}let tp="&type=json";try{let tabs=[];let lists=[];plays.forEach(function(it){lists.push(it.info);let tbn=it.sitename[0]||it.site.replace(".com","");tbn=tbn.split("").join(" ");tabs.push(tbn)});VOD.vod_play_from=tabs.join("$$$");let vod_lists=[];print("play_url1:"+play_url);play_url=play_url.replace("&play_url=","&type=json&play_url=");print("play_url2:"+play_url);lists.forEach(function(item,idex){if(item||shows){if(item&&Array.isArray(item)&&item.length>1){let tmp=item.slice(1).map(function(its){return its.index+"$"+play_url+base64Encode(adhead(its.url))});vod_lists.push(tmp.join("#"))}if(shows){let arr=[];let tmp=[];let zy=shows.item_list[idex];zy.date.forEach(function(date){let day=date.day;for(let j=0;j<day.length;j++){let dayy=day[j][0]>=10?day[j][0]:"0"+day[j][0];let Tdate=date.year+date.month+dayy;arr.push(Tdate)}});for(let k=0;k<arr.length;k++){let url="https://v.sogou.com/vc/eplay?query="+arr[k]+"&date="+arr[k]+"&key="+key+"&st=5&tvsite="+plays[idex].site;tmp.push("第"+arr[k]+"期"+"$"+play_url+base64Encode(adhead(url)))}vod_lists.push(tmp.join("#"))}}else if(plays[idex].site){let tmp=[];if(!plays[idex].flag_list.includes("trailer")){tmp.push(plays[idex].sitename[0]+"$"+play_url+base64Encode(adhead(plays[idex].url)))}else{tmp.push(plays[idex].sitename[0]+"—预告"+"$"+play_url+base64Encode(adhead(plays[idex].url)))}vod_lists.push(tmp.join("#"))}});VOD.vod_play_url=vod_lists.join("$$$")}catch(e){let img=json.photo.item_list;VOD.vod_name="本片无选集";VOD.vod_pic=img.length>0?img[0]:""}}catch(e){print("发生了错误:"+e.message)}',
    // 二级:'js:var vod={vod_id:input};let html=request(input);function adhead(url){let hd="https://v.sogou.com";if(!url.startsWith(hd)){url=hd+url}return url}try{let json=JSON.parse(html.match(/INITIAL_STATE.*?({.*});/)[1]).detail.itemData;let key=json.dockey;let name=json.name;let zone=json.zone;let score=json.score?json.score:"暂无";let style=json.style;let emcee=json.emcee?"主持："+json.emcee:json.name;let director=json.director?"导演："+json.director:name;director=director.replace(/;/g,"\\t");let starring=json.starring?"演员："+json.starring:"声优："+json.shengyou;starring=starring.replace(/.*undefined/,"").replace(/;/g,"\\t");let update=json.update_wordstr?json.update_wordstr:"";let tv_station=json.tv_station?json.tv_station:zone;let introduction=json.introduction;let shengyou=json.shengyou;let shows=json.play_from_open_index;let plays=json.play.item_list;if(shows){vod.vod_name=name;vod.vod_area=emcee+","+tv_station;vod.vod_director=director;vod.vod_actor=starring;vod.vod_pic=jsp.pd(html,"#thumb_img&&img&&src");vod.vod_remarks=style+" 评分:"+score+","+update;vod.vod_content=introduction}else{vod.vod_name=name;vod.vod_director=director;vod.vod_actor=starring;vod.vod_pic=jsp.pd(html,"#thumb_img&&img&&src");vod.vod_content=introduction}let tp="&type=json";try{let tabs=[];let lists=[];plays.forEach(function(it){lists.push(it.info);let tbn=it.sitename[0]||it.site.replace(".com","");tbn=tbn.split("").join(" ");tabs.push(tbn)});vod.vod_play_from=tabs.join("$$$");vod_lists=[];play_url=play_url.replace("&play_url=","&type=json&play_url=");lists.forEach(function(item,idex){if(item||shows){if(item&&Array.isArray(item)&&item.length>1){let tmp=item.slice(1).map(function(its){return its.index+"$"+play_url+base64Encode(adhead(its.url))});vod_lists.push(tmp.join("#"))}if(shows){let arr=[];let tmp=[];let zy=shows.item_list[idex];zy.date.forEach(function(date){let day=date.day;for(let j=0;j<day.length;j++){let dayy=day[j][0]>=10?day[j][0]:"0"+day[j][0];let Tdate=date.year+date.month+dayy;arr.push(Tdate)}});for(let k=0;k<arr.length;k++){let url="https://v.sogou.com/vc/eplay?query="+arr[k]+"&date="+arr[k]+"&key="+key+"&st=5&tvsite="+plays[idex].site;tmp.push("第"+arr[k]+"期"+"$"+play_url+base64Encode(adhead(url)))}vod_lists.push(tmp.join("#"))}}else if(plays[idex].site){let tmp=[];if(!plays[idex].flag_list.includes("trailer")){tmp.push(plays[idex].sitename[0]+"$"+play_url+base64Encode(adhead(plays[idex].url)))}else{tmp.push(plays[idex].sitename[0]+"—预告"+"$"+play_url+base64Encode(adhead(plays[idex].url)))}vod_lists.push(tmp.join("#"))}});vod.vod_play_url=vod_lists.join("$$$")}catch(e){let img=json.photo.item_list;vod.vod_name="本片无选集";vod.vod_pic=img.length>0?img[0]:""}}catch(e){}',
    搜索: '',
    搜索: `js:
let d = [];
let html = request(input);
let jsonA = JSON.parse(html.match(/INITIAL_STATE.*?({.*});/)[1]);
print(jsonA);
jsonA = jsonA.result.resultData.searchData.results;
jsonA.forEach(function(it) {
	let name = it.name;
	let introduction = it.introduction;
	let pic = it.v_picurl;
	let url = it.tiny_url;
	let zone = it.zone;
	let score = it.score || "暂无";
	let style = it.style;
	if (it.play_info && it.play_info.play_list) {
		let r = {};
		r.title = name.replace(//, "").replace(//, "");
		r.url = "https://v.sogou.com" + url.replace(/teleplay|cartoon/g, 'series');
		r.desc = it.listCategory.join(",");
		r.content = introduction;
		r.pic_url = pic;
		d.push(r)
	}
});
setResult(d);`,

}