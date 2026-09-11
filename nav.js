/* =====================================================
   高中物理知识库 · 全库互联导航
   每个专题页引入本文件后，会自动在底部显示：
   ← 上一篇  |  🗺 思维导图  |  下一篇 →
   顺序与思维导图一致，首尾相连（环形）。
   ===================================================== */
(function () {
    var ROOT = (document.currentScript && document.currentScript.src)
        ? document.currentScript.src.replace(/[^/]*$/, '')
        : '';

    /* 全库页面顺序（f:文件名  n:显示名  h:相对根路径  b:返回目录路径） */
    var LIST = [
        { f: '高中物理_运动学闯关.html',              n: '运动学闯关',                h: '力学/高中物理_运动学闯关.html',            b: 'index.html' },
        { f: '高中物理_受力分析与平衡闯关.html',       n: '受力分析与平衡',            h: '力学/高中物理_受力分析与平衡闯关.html',     b: 'index.html' },
        { f: '高中物理_牛顿运动定律闯关.html',         n: '牛顿运动定律',              h: '力学/高中物理_牛顿运动定律闯关.html',       b: 'index.html' },
        { f: '高中物理_动量闯关.html',                 n: '动量守恒',                  h: '力学/高中物理_动量闯关.html',               b: 'index.html' },
        { f: '高中物理_万有引力与航天闯关.html',       n: '万有引力与航天',            h: '力学/高中物理_万有引力与航天闯关.html',     b: 'index.html' },
        { f: '高中物理_功和能.html',                   n: '功和能 · 基础',             h: '力学/高中物理_功和能.html',                 b: 'index.html' },
        { f: '高中物理_机械振动与机械波.html',         n: '机械振动与机械波',          h: '力学/高中物理_机械振动与机械波.html',       b: 'index.html' },
        { f: '高中物理_静电场闯关.html',               n: '静电场',                    h: '高中物理_静电场闯关.html',                 b: 'index.html' },
        { f: '高中物理_恒定电流闯关.html',             n: '恒定电流',                  h: '高中物理_恒定电流闯关.html',               b: 'index.html' },
        { f: '高中物理_交变电流闯关.html',             n: '交变电流',                  h: '高中物理_交变电流闯关.html',               b: 'index.html' },
        { f: '高中物理_电磁感应闯关.html',             n: '电磁感应',                  h: '高中物理_电磁感应闯关.html',               b: 'index.html' },
        { f: '高中物理_磁场.html',                     n: '磁场基础',                  h: '磁场专题/高中物理_磁场.html',              b: 'index.html' },
        { f: '高中物理_磁场_带电粒子在磁场中的运动.html', n: '粒子在磁场中运动',        h: '磁场专题/高中物理_磁场_带电粒子在磁场中的运动.html', b: 'index.html' },
        { f: '高中物理_磁场_磁场中的圆.html',          n: '磁场中的圆',                h: '磁场专题/高中物理_磁场_磁场中的圆.html',    b: 'index.html' },
        { f: '高中物理_磁场_磁聚焦与磁发散.html',        n: '磁聚焦与磁发散',            h: '磁场专题/高中物理_磁场_磁聚焦与磁发散.html', b: 'index.html' },
        { f: '高中物理_磁场_带电粒子在复合场中的运动.html', n: '粒子在复合场中',        h: '磁场专题/高中物理_磁场_带电粒子在复合场中的运动.html', b: 'index.html' },
        { f: '高中物理_磁场_楞次定律与安培力.html',    n: '楞次定律与安培力',          h: '磁场专题/高中物理_磁场_楞次定律与安培力.html', b: 'index.html' },
        { f: '高中物理_磁场_单棒切割.html',            n: '单棒切割',                  h: '磁场专题/高中物理_磁场_单棒切割.html',          b: 'index.html' },
        { f: '高中物理_磁场_双棒切割.html',            n: '双棒切割',                  h: '磁场专题/高中物理_磁场_双棒切割.html',          b: 'index.html' },
        { f: '高中物理_热学闯关.html',                 n: '热学',                      h: '高中物理_热学闯关.html',                   b: 'index.html' },
        { f: '高中物理_光学.html',                     n: '光学',                      h: 'optics/高中物理_光学.html',                 b: 'index.html' },
        { f: 'physics_atomic_summary.html',            n: '近代物理',                  h: 'atomic_physics/physics_atomic_summary.html', b: 'index.html' },
        { f: '01_研究匀变速直线运动.html',             n: '研究匀变速直线运动',        h: '力学实验/01_研究匀变速直线运动.html',      b: 'index.html' },
        { f: '02_探究弹力和弹簧伸长关系.html',         n: '探究弹力与弹簧伸长',        h: '力学实验/02_探究弹力和弹簧伸长关系.html',  b: 'index.html' },
        { f: '03_验证力的平行四边形定则.html',         n: '验证力的平行四边形',        h: '力学实验/03_验证力的平行四边形定则.html',  b: 'index.html' },
        { f: '04_探究加速度与力质量关系.html',         n: '探究加速度与力质量',        h: '力学实验/04_探究加速度与力质量关系.html',  b: 'index.html' },
        { f: '05_探究平抛运动规律.html',               n: '探究平抛运动规律',          h: '力学实验/05_探究平抛运动规律.html',        b: 'index.html' },
        { f: '06_验证机械能守恒定律.html',             n: '验证机械能守恒',            h: '力学实验/06_验证机械能守恒定律.html',      b: 'index.html' },
        { f: '07_探究动能定理.html',                   n: '探究动能定理',              h: '力学实验/07_探究动能定理.html',            b: 'index.html' },
        { f: '08_验证动量守恒定律.html',               n: '验证动量守恒',              h: '力学实验/08_验证动量守恒定律.html',        b: 'index.html' },
        { f: '09_用单摆测量重力加速度.html',           n: '单摆测重力加速度',          h: '力学实验/09_用单摆测量重力加速度.html',    b: 'index.html' },
        { f: '高考物理_力学实验闯关.html',             n: '力学实验综合闯关',          h: '力学/高考物理_力学实验闯关.html',           b: 'index.html' },
        { f: '01_认识表头G改装基础.html',              n: '认识表头 G',                h: '电学实验/01_认识表头G改装基础.html',       b: 'index.html' },
        { f: '02_改装成电压表.html',                   n: '改装成电压表',              h: '电学实验/02_改装成电压表.html',            b: 'index.html' },
        { f: '03_改装成大量程电流表.html',             n: '改装大量程电流表',          h: '电学实验/03_改装成大量程电流表.html',      b: 'index.html' },
        { f: '04_半偏法测表头内阻.html',               n: '半偏法测表头内阻',          h: '电学实验/04_半偏法测表头内阻.html',       b: 'index.html' },
        { f: '05_伏安法测电阻.html',                   n: '伏安法测电阻',              h: '电学实验/05_伏安法测电阻.html',            b: 'index.html' },
        { f: '06_滑动变阻器限流分压.html',             n: '滑动变阻器限流分压',        h: '电学实验/06_滑动变阻器限流分压.html',      b: 'index.html' },
        { f: '07_多用电表欧姆表.html',                 n: '多用电表（欧姆表）',        h: '电学实验/07_多用电表欧姆表.html',          b: 'index.html' },
        { f: '08_测定电源电动势和内阻.html',           n: '测定电源电动势内阻',        h: '电学实验/08_测定电源电动势和内阻.html',    b: 'index.html' },
        { f: '09_描绘小灯泡伏安特性曲线.html',         n: '描绘小灯泡伏安特性',        h: '电学实验/09_描绘小灯泡伏安特性曲线.html',  b: 'index.html' },
        { f: '10_测量金属丝电阻率.html',               n: '测量金属丝电阻率',          h: '电学实验/10_测量金属丝电阻率.html',        b: 'index.html' },
        { f: '11_电桥测电阻.html',                      n: '电桥法测电阻',              h: '电学实验/11_电桥测电阻.html',              b: 'index.html' },
        { f: '12_安安法与伏伏法测电阻.html',            n: '安安法伏伏法测电阻',        h: '电学实验/12_安安法与伏伏法测电阻.html',    b: 'index.html' },
        { f: '高考物理_电学实验闯关.html',             n: '电学实验综合闯关',          h: '高考物理_电学实验闯关.html',               b: 'index.html' },
        { f: '初中物理_浮力基础知识.html',             n: '浮力基础',                  h: '初中物理/初中物理_浮力基础知识.html',      b: '初中物理/index.html' },
        { f: '初中物理_浮力交互模型.html',             n: '浮力交互模型',              h: '初中物理/初中物理_浮力交互模型.html',      b: '初中物理/index.html' },
        { f: '初中物理_压强选择题.html',               n: '压强选择题',                h: '初中物理/初中物理_压强选择题.html',        b: '初中物理/index.html' },
        { f: '初中物理_电学压轴题.html',               n: '电学压轴题',                h: '初中物理/初中物理_电学压轴题.html',        b: '初中物理/index.html' },
        { f: '初中物理_电路故障诊断.html',             n: '电路故障诊断',              h: '初中物理/初中物理_电路故障诊断.html',      b: '初中物理/index.html' },
        { f: '初中物理_光学基础知识.html',             n: '光学基础',                  h: '初中物理/初中物理_光学基础知识.html',      b: '初中物理/index.html' }
    ];

    var cur = decodeURIComponent(location.pathname.split('/').pop());
    var i = -1;
    for (var k = 0; k < LIST.length; k++) { if (LIST[k].f === cur) { i = k; break; } }
    if (i < 0) return; /* 目录页等不显示 */

    var n = LIST.length;
    var prev = LIST[(i - 1 + n) % n];
    var next = LIST[(i + 1) % n];

    var css = '#kb-nav{position:fixed;bottom:16px;left:50%;transform:translateX(-50%);z-index:99999;'
        + 'display:flex;align-items:center;gap:6px;padding:7px 8px;'
        + 'background:rgba(14,19,34,.86);border:1px solid rgba(255,255,255,.16);border-radius:999px;'
        + 'backdrop-filter:blur(10px);box-shadow:0 8px 30px rgba(0,0,0,.45);'
        + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;font-size:13px;}'
        + '#kb-nav a{display:inline-block;color:#e8edf5;text-decoration:none;white-space:nowrap;'
        + 'overflow:hidden;text-overflow:ellipsis;max-width:210px;padding:5px 13px;border-radius:999px;transition:background .15s;}'
        + '#kb-nav a:hover{background:rgba(255,255,255,.15);}'
        + '#kb-nav .kb-home{background:linear-gradient(135deg,#3a7bd5,#2a5298);font-weight:700;color:#fff;max-width:none;}'
        + '#kb-nav .kb-home:hover{filter:brightness(1.1);background:linear-gradient(135deg,#3a7bd5,#2a5298);}'
        + '#kb-nav .kb-name{color:#ffd54f;font-weight:600;}';

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.id = 'kb-nav';
    bar.innerHTML =
        '<a class="kb-side" href="' + ROOT + prev.h + '" title="上一篇：' + prev.n + '">← <span class="kb-name">' + prev.n + '</span></a>'
        + '<a class="kb-home" href="' + ROOT + 'index.html" title="返回思维导图">🗺 思维导图</a>'
        + '<a class="kb-side" href="' + ROOT + next.h + '" title="下一篇：' + next.n + '"><span class="kb-name">' + next.n + '</span> →</a>';
    document.body.appendChild(bar);
})();
