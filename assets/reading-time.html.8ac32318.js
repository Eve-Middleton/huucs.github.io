import{_ as o,r as i,o as c,c as r,a,w as e,d as p,b as n,e as s}from"./app.e086d4eb.js";const u={},d=p('<p><a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-reading-time/v/next" target="_blank"><img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-reading-time/next.svg?style=flat-square&amp;logo=npm" style="display:inline;margin:0 4px 0 0;" alt="npm"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/reading-time" target="_blank"><img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--reading--time-26A2FF?style=flat-square&amp;logo=github" style="display:inline;margin:0 4px 0 0;" alt="github"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display:inline;margin:0 4px 0 0;" alt="license"></a></p><p><code>@renovamen/vuepress-plugin-reading-time@next</code> \u63D2\u4EF6\uFF0C\u7528\u4E8E\u5728 <a href="https://v2.vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress 2</a> \u4E2D\u7EDF\u8BA1\u6587\u7AE0\u5B57\u6570\u548C\u4F30\u8BA1\u9605\u8BFB\u65F6\u957F\u3002\u76F8\u6BD4\u5176\u5B83\u7684\u9605\u8BFB\u65F6\u957F\u63D2\u4EF6\uFF0C\u672C\u63D2\u4EF6\u53EF\u4EE5\uFF1A</p><ul><li>\u4E3A\u4E2D\u82F1\u6587\u5206\u522B\u8BBE\u7F6E\u9605\u8BFB\u901F\u5EA6</li><li>\u9009\u62E9\u5C06\u4EE3\u7801\u5757\u6216\u516C\u5F0F\u5757\u4E2D\u7684\u5B57\u7B26\u6392\u9664\u5728\u7EDF\u8BA1\u4EE5\u5916</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2>',4),v=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"install"),s(` @renovamen/vuepress-plugin-reading-time@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @renovamen/vuepress-plugin-reading-time@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @renovamen/vuepress-plugin-reading-time@next
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=p(`<p>\u7136\u540E\u5728 <code>.vuepress/config.js</code> \u4E2D\u5F15\u5165\u8FD9\u4E2A\u63D2\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> readingTimePlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@renovamen/vuepress-plugin-reading-time&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u6CD5\u6765\u83B7\u53D6 <code>readingTime</code> \u6570\u636E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> pageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pageData<span class="token punctuation">.</span>value<span class="token punctuation">.</span>readingTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u4E2A\u6837\u4F8B <code>readingTime</code> \u6570\u636E\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">minutes</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>  <span class="token comment">// \u9605\u8BFB\u65F6\u957F\u4F30\u8BA1</span>
  <span class="token literal-property property">words</span><span class="token operator">:</span> <span class="token number">3500</span>  <span class="token comment">// \u6587\u7AE0\u5B57\u6570</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u5728\u6587\u7AE0\u7684 <code>frontmatter</code> \u4E2D\u91CD\u5199 <code>readingTime</code> \u6570\u636E\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> Hello Word
<span class="token key atrule">readingTime</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">minutes</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token key atrule">words</span><span class="token punctuation">:</span> <span class="token number">1500</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h2><h3 id="excludes" tabindex="-1"><a class="header-anchor" href="#excludes" aria-hidden="true">#</a> excludes</h3><p>\u4E0D\u9700\u8981\u8FDB\u884C\u7EDF\u8BA1\u7684\u9875\u9762\u8DEF\u5F84\uFF0C\u63D2\u4EF6\u4F1A\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u5C06\u8FD9\u4E9B\u9875\u9762\u6392\u9664\u3002\u5982\u679C\u6307\u5B9A\u4E86 <a href="#includes"><code>includes</code></a> \u9879\uFF0C\u90A3\u4E48\u8FD9\u4E00\u9879\u65E0\u6548\u3002</p><ul><li>Type: <code>Array&lt;string&gt;</code></li><li>Default: <code>[]</code></li></ul><p>\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">excludes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/docs/.*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/posts/hello-word.html&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="includes" tabindex="-1"><a class="header-anchor" href="#includes" aria-hidden="true">#</a> includes</h3><p>\u9700\u8981\u8FDB\u884C\u7EDF\u8BA1\u7684\u9875\u9762\u8DEF\u5F84\uFF08\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09\u3002\u5982\u679C\u6307\u5B9A\u4E86\u8FD9\u4E00\u9879\uFF0C\u90A3\u4E48 <a href="#excludes"><code>excludes</code></a> \u9879\u65E0\u6548\u3002</p><ul><li>Type: <code>Array&lt;string&gt;</code></li><li>Default: <code>[]</code></li></ul><p>Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">includes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/docs/.*&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wordsperminutecn" tabindex="-1"><a class="header-anchor" href="#wordsperminutecn" aria-hidden="true">#</a> wordsPerMinuteCN</h3><p>\u4E00\u5206\u949F\u53EF\u4EE5\u9605\u8BFB\u591A\u5C11\u4E2A\u4E2D\u6587\u5B57\u7B26\u3002</p><ul><li>Type: <code>int</code></li><li>Default: <code>300</code></li></ul><p>\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">wordsPerMinuteCN</span><span class="token operator">:</span> <span class="token number">500</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wordsperminuteen" tabindex="-1"><a class="header-anchor" href="#wordsperminuteen" aria-hidden="true">#</a> wordsPerMinuteEN</h3><p>\u4E00\u5206\u949F\u53EF\u4EE5\u9605\u8BFB\u591A\u5C11\u4E2A\u82F1\u6587\u5B57\u7B26\u3002</p><ul><li>Type: <code>int</code></li><li>Default: <code>160</code></li></ul><p>\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">wordsPerMinuteEN</span><span class="token operator">:</span> <span class="token number">200</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="excludecodeblock" tabindex="-1"><a class="header-anchor" href="#excludecodeblock" aria-hidden="true">#</a> excludeCodeBlock</h3><p>\u662F\u5426\u6392\u9664\u6240\u6709\u4EE3\u7801\u5757\u5185\u7684\u5B57\u7B26\u3002</p><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">excludeCodeBlock</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="excludetexblock" tabindex="-1"><a class="header-anchor" href="#excludetexblock" aria-hidden="true">#</a> excludeTexBlock</h3><p>\u662F\u5426\u6392\u9664\u6240\u6709\u516C\u5F0F\u5757\u5185\u7684\u5B57\u7B26\u3002</p><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token function">readingTimePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">excludeTexBlock</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F00\u6E90\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5F00\u6E90\u534F\u8BAE" aria-hidden="true">#</a> \u5F00\u6E90\u534F\u8BAE</h2><p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a></p>`,42);function b(h,f){const t=i("CodeGroupItem"),l=i("CodeGroup");return c(),r("div",null,[d,a(l,null,{default:e(()=>[a(t,{title:"PNPM",active:""},{default:e(()=>[v]),_:1}),a(t,{title:"YARN",active:""},{default:e(()=>[m]),_:1}),a(t,{title:"NPM"},{default:e(()=>[k]),_:1})]),_:1}),g])}var x=o(u,[["render",b],["__file","reading-time.html.vue"]]);export{x as default};