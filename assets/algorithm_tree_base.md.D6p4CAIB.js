import{_ as a,c as e,o as r,a4 as t}from"./chunks/framework.M0jMQRpf.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/tree/base.md","filePath":"algorithm/tree/base.md"}'),o={name:"algorithm/tree/base.md"},p=t('<h2 id="平衡二叉树" tabindex="-1">平衡二叉树 <a class="header-anchor" href="#平衡二叉树" aria-label="Permalink to &quot;平衡二叉树&quot;">​</a></h2><p>平衡二叉树（Balanced Binary Tree）是一种二叉树，其中每个节点的左右两个子树的高度差不超过1。这意味着，对于每个节点，其左右子树的高度差不会超过1层。这种平衡性质的存在确保了树的高度近似于 log(n)，其中 n 是树中节点的数量。</p><p>一个平衡二叉树有以下特点：</p><p>高度平衡： 对于任意节点，左右子树的高度差不超过1。</p><p>递归定义： 平衡二叉树的每个子树也是平衡二叉树。</p><p>性能优势： 由于树是平衡的，查找、插入和删除等操作的平均时间复杂度都是 O(log n)。这是相对于非平衡二叉树，其操作的时间复杂度可能达到 O(n) 的优势。</p><p>平衡二叉树的经典例子是 AVL 树。在 AVL 树中，任何节点的左子树和右子树的高度差不超过1。为了维护这一性质，对 AVL 树的插入和删除操作会引入旋转操作，以确保树的平衡性。</p><p>平衡二叉树的一个典型应用是在数据库索引中。在这种情况下，树的平衡性确保了检索、插入和删除等操作的高效性。</p><h2 id="二叉搜索树" tabindex="-1">二叉搜索树 <a class="header-anchor" href="#二叉搜索树" aria-label="Permalink to &quot;二叉搜索树&quot;">​</a></h2><p>二叉搜索树（Binary Search Tree，BST）是一种二叉树的特殊形式，它满足以下性质：</p><p>节点的左子树只包含小于当前节点的键值。 节点的右子树只包含大于当前节点的键值。 左右子树也必须是二叉搜索树。 这个性质保证了对于树中的任意节点，其左子树上的节点值都小于该节点，右子树上的节点值都大于该节点，从而形成了一种有序结构。</p><p>举例说明： 如果以中序遍历一个二叉搜索树，得到的节点值序列是有序的。这是因为中序遍历的顺序是左根右，对于二叉搜索树，这就意味着节点值按从小到大的顺序被访问。</p><p>例子： 考虑以下二叉搜索树： 4 / <br> 2 6 / \\ / <br> 1 3 5 7 这是一个有效的二叉搜索树，因为每个节点的左子树都包含小于当前节点的值，右子树都包含大于当前节点的值。</p><p>时间复杂度： 插入： O(log n) - 在树中搜索适当的位置。 删除： O(log n) - 同样需要搜索适当的位置，然后可能需要进行一些平衡操作。 查找： O(log n) - 通过树进行二分查找。 二叉搜索树的性质使得它在查找、插入和删除等操作上有着较好的平均时间复杂度。然而，如果一棵二叉搜索树变得不平衡，其性能可能下降到线性级别。因此，有一些变种的二叉搜索树，比如 AVL 树和红黑树，它们通过一些规则和平衡操作来保持树的平衡性。</p><h2 id="完全二叉树" tabindex="-1">完全二叉树 <a class="header-anchor" href="#完全二叉树" aria-label="Permalink to &quot;完全二叉树&quot;">​</a></h2><p>完全二叉树（Complete Binary Tree）是一种二叉树，其中除了最后一层，其他每一层的节点都被完全填满，并且所有节点都尽可能地靠左排列。</p><p>特点： 最后一层从左到右填充，但不一定是满的。 所有的叶子节点都集中在树的最后一层或者倒数第二层。 举例说明： 以下是一个例子： 1 / <br> 2 3 / \\ / 4 5 6 在这个例子中，每一层都尽量地被填满，而且所有的叶子节点都在最后一层，这就是一个完全二叉树。</p><p>性质和应用： 完全二叉树常常通过数组来实现。具体来说，如果一个节点在数组中的索引是 i，那么它的左子节点索引是 2i，右子节点索引是 2i + 1。</p><p>完全二叉树在堆（Heap）的实现中常被使用。堆是一种特殊的树形数据结构，常用于优先队列等场景。</p><p>时间复杂度： 查找： O(log n) - 因为是一个二叉树，查找的时间复杂度与树的高度相关。 插入： O(1) - 在完全二叉树中，插入操作只需要在最后一层添加新节点。 删除： O(log n) - 删除操作涉及到节点的移动和调整，所以与查找操作类似。 完全二叉树的结构性质使得在某些情况下，它的操作效率相对较高</p><h2 id="满二叉树" tabindex="-1">满二叉树 <a class="header-anchor" href="#满二叉树" aria-label="Permalink to &quot;满二叉树&quot;">​</a></h2><p>满二叉树（Full Binary Tree）: 每个节点要么是叶子节点，要么有两个子节点。 所有叶子节点在同一层级上。 满二叉树的节点总数为 2 ^ (h+1) −1，其中 h 是树的高度。</p><h2 id="红黑树" tabindex="-1">红黑树 <a class="header-anchor" href="#红黑树" aria-label="Permalink to &quot;红黑树&quot;">​</a></h2><p>红黑树（Red-Black Tree）是一种自平衡的二叉搜索树，具有一些额外的属性来确保树在插入和删除操作后仍然保持相对平衡。这种平衡性质有助于保持搜索、插入和删除等操作的高效性。</p><p>红黑树的特性： 节点颜色： 每个节点都带有颜色属性，通常为红色或黑色。 根节点是黑色的。 叶子节点（NIL 或空节点）是黑色的。 如果一个节点是红色的，那么它的两个子节点都是黑色的。 从任意节点到其每个叶子节点的路径都包含相同数量的黑色节点。 这些规则确保了红黑树的平衡性，保证了树的高度不会变得过高，从而保持了搜索等操作的时间复杂度。</p>',25),n=[p];function l(i,h,s,c,d,_){return r(),e("div",null,n)}const u=a(o,[["render",l]]);export{b as __pageData,u as default};
