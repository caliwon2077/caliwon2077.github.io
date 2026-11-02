const projectDetails = {
  copilot: {
    kicker: '01 / AI AGENT · 概念示例', title: 'Nexus · AI 协作工作台',
    body: '<p class="detail-notice">本项目是网站展示用的概念方案，尚非已上线产品，不包含真实项目业绩。</p><h3>从什么问题出发？</h3><p>面对复杂任务，用户需要的不只是一个答案，还需要知道接下来做什么、为什么这样做，以及哪些步骤需要自己确认。</p><h3>核心体验</h3><ul><li>将自然语言目标转化为可编辑的任务计划。</li><li>展示当前步骤、输入依据与中间结果。</li><li>在关键动作前交由用户确认，保留修改与撤回入口。</li></ul><h3>如何验证价值</h3><p>选择一类具体任务，对比现有工作方式，观察任务完成率、人工修正次数与用户对结果的理解程度。先验证协作是否有效，再扩展能力。</p>'
  },
  knowledge: {
    kicker: '02 / KNOWLEDGE PRODUCT · 概念示例', title: 'Knowhere · 个人知识助手',
    body: '<p class="detail-notice">本项目是网站展示用的概念方案，尚非已上线产品，不包含真实项目业绩。</p><h3>从什么问题出发？</h3><p>收藏的信息越来越多，却很难在真正需要的时候找到它。知识产品的价值，不只在于存储，更在于让已有信息参与新的思考。</p><h3>核心体验</h3><ul><li>围绕问题检索内容，支持自然语言提问。</li><li>为回答提供可定位的原文出处，区分事实与推断。</li><li>遇到信息不足时明确说明，并引导补充资料。</li></ul><h3>如何验证价值</h3><p>以真实资料建立一组问题，检查检索相关性、引用准确性与无依据回答情况。关注用户能否更快找到可靠信息，而非只关注回答是否流畅。</p>'
  },
  flow: {
    kicker: '03 / AI WORKFLOW · 概念示例', title: 'Flow · 可视化 AI 工作流',
    body: '<p class="detail-notice">本项目是网站展示用的概念方案，尚非已上线产品，不包含真实项目业绩。</p><h3>从什么问题出发？</h3><p>重复性任务往往涉及多个步骤。当 AI 参与其中，用户需要理解流程如何运行，并且能定位失败、调整输入和复用有效方案。</p><h3>核心体验</h3><ul><li>以节点表达输入、处理和人工确认的流程。</li><li>让每个节点的输入、输出与运行状态可见。</li><li>失败时提供具体原因和可控的重试方式。</li></ul><h3>如何验证价值</h3><p>从一个边界清晰的流程开始，记录端到端完成情况、异常恢复成本及人工介入点，判断自动化是否真正节省了总投入。</p>'
  }
};
const noteDetails = {
  problem: { kicker: 'FIELD NOTES / PRODUCT THINKING', title: '先找到问题，再决定是否需要 AI', body: '<p class="detail-notice">示例随笔，可替换为宋凯的原创文章。</p><p>一项新能力出现时，很容易先想到“能做什么”。产品探索还需要多问一步：这个能力解决了谁在什么场景下的问题？</p><h3>把问题写得更具体</h3><p>比起“做一个智能助手”，可以先描述用户当前如何完成任务、在哪个环节受阻，以及现有方法为什么不够好。清晰的问题，才能支持有意义的方案比较。</p><h3>给 AI 一个合适的位置</h3><p>有些步骤需要生成与理解，有些步骤更适合确定性的规则。可以先设计最小可用流程，再判断 AI 应该承担哪一部分，以及失败后如何继续。</p><h3>让价值可以被观察</h3><p>在做原型之前，先确定想看到什么变化：减少了什么工作，改善了什么体验，又增加了哪些检查成本。把收益与成本放在同一个任务里看。</p>' },
  trust: { kicker: 'FIELD NOTES / HUMAN × AI', title: '一个好的 AI 产品，应该让用户有掌控感', body: '<p class="detail-notice">示例随笔，可替换为宋凯的原创文章。</p><p>自动化程度更高，并不意味着用户体验一定更好。对于有影响的动作，用户还需要理解发生了什么，以及自己如何介入。</p><h3>让过程可理解</h3><p>展示任务状态、必要依据和下一步计划。避免用一长段技术细节增加负担，而是告诉用户与当前决定相关的信息。</p><h3>让边界可感知</h3><p>在信息不足时表达不确定性，在需要授权时说明动作与影响。把“建议”与“已经执行”明确区分。</p><h3>让结果可修正</h3><p>提供修改、重试、撤回或人工接管的入口。信任也来自用户知道：即使结果不理想，仍然有继续推进的方法。</p>' },
  evaluation: { kicker: 'FIELD NOTES / BUILD & LEARN', title: '从「演示很惊艳」到「每天都好用」', body: '<p class="detail-notice">示例随笔，可替换为宋凯的原创文章。</p><p>一次顺利的演示可以证明可能性，持续使用则需要面对真实输入、模糊目标和失败情况。产品验证应该覆盖这些普通却关键的时刻。</p><h3>收集真实任务</h3><p>围绕目标用户建立任务样本，保留常见输入与困难案例。每次迭代都回到同一组任务，观察改善与退步。</p><h3>看整个任务的成本</h3><p>除了生成速度，还要观察等待、检查、修改和失败恢复的时间。如果用户需要花更多精力确认答案，局部提速未必带来整体价值。</p><h3>把失败变成设计输入</h3><p>记录问题出现在哪个环节，再决定是改提示词、调整流程、补充数据，还是缩小产品承诺。让每一次迭代都对应一个可观察的问题。</p>' }
};

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav');
function closeMenu() { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', '打开导航'); }
menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航'); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    let count = 0;
    document.querySelectorAll('.project-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
    document.querySelector('.filter-status').textContent = `当前显示 ${count} 个项目`;
  });
});

const dialog = document.querySelector('#detail-dialog');
let previousFocus;
function openDetail(detail) {
  previousFocus = document.activeElement;
  document.querySelector('#dialog-title').textContent = detail.title;
  document.querySelector('#dialog-kicker').textContent = detail.kicker;
  document.querySelector('#dialog-content').innerHTML = detail.body;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openDetail(projectDetails[button.dataset.project])));
document.querySelectorAll('[data-note]').forEach(button => button.addEventListener('click', () => openDetail(noteDetails[button.dataset.note])));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target !== dialog) return; const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; previousFocus?.focus(); });

document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('caliwon@qq.com');
    status.textContent = '邮箱已复制，期待你的来信。';
  } catch {
    status.textContent = '请长按或选中邮箱地址复制：caliwon@qq.com';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
