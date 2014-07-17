<?php

if('submited') {
	$f = fopen('save.txt','write');
	fwrite( $f, $_POST['name'] );
	fclose($f);
	echo "<h3>Information has been saved</h3>";
}
?>

<link rel="stylesheet" href="contact.css">
<div class="back">
	<a href="contact.html"><button>Back</button></a>
</div>

<!-- 
1.怎么不从  2.html 跳转到  function.php ？
2.POST怎么记录多个项目？
 -->
