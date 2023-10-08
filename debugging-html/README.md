```diff
diff --git a/bitsy.html b/solution.html
index 7507761..cd80f67 100644
--- a/bitsy.html
+++ b/solution.html
@@ -36,7 +36,7 @@
 	max-height: calc(100% - (3 * var(--bitsy-space-m)));
 	border-radius: var(--bitsy-space-s);
 	border-bottom: solid var(--bitsy-space-xs) var(--bitsy-color-main-2);
-
+}

 .bitsy-card-main {
 	flex-grow: 1;
@@ -115,7 +115,7 @@ html, body {
 	height: calc(var(--bitsy-size-l) * 1.3);
 	max-height: 100vh;

-	text-align center;
+	text-align: center;
 }

 /* high resolution */
@@ -146,7 +146,7 @@ html, body {
 		<div class="bitsy-card">
 			<div class="bitsy-card-titlebar">
 				<span class="bitsy-card-title">
-					<img class="bitsy-homepage-cat" src"bitsy_files/cat.svg">
+					<img class="bitsy-homepage-cat" src="bitsy_files/cat.svg">
 				</span>
 			</div>

@@ -154,19 +154,19 @@ html, body {
 				<p><b>welcome to the world of bitsy!</b></p>
 				<p> ~ a little engine for little games, worlds, and stories ~ </p>

-				<p><b>get started</p>
+				<p><b>get started</b></p>
 				<p><a href="https://make.bitsy.org/">make</a> a game | <a href="https://itch.io/games/made-with-bitsy">play</a> a game</p>

 				<p><b>learn</b></p>

-                <p><a> href="https://make.bitsy.org/docs/">read</a> the docs | <a href="https://ledoux.itch.io/bitsy/community">join</a> the forum</p>
+				<p><a href="https://make.bitsy.org/docs/">read</a> the docs | <a href="https://ledoux.itch.io/bitsy/community">join</a> the forum</p>

 				<p><b>more</b></p>

 				<p><a href="https://bitsy.org/friends.html">friends of bitsy</a> | <a href="https://bitsy.org/classic">bitsy classic</a> | <a href="https://bitsy.org/scrapbook.html">press, shows, etc.</a></p>

 				<p><b>bitsy around the net</b></p>
-				<p><a "https://ledoux.itch.io/bitsy">itch.io</a> | <a rel="me" href="https://digipres.club/@bitsy">mastodon</a> | <a href="https://cohost.org/bitsy">cohost</a> | <a href="https://github.com/le-doux/bitsy">github</a></p>
+				<p><a href="https://ledoux.itch.io/bitsy">itch.io</a> | <a rel="me" href="https://digipres.club/@bitsy">mastodon</a> | <a href="https://cohost.org/bitsy">cohost</a> | <a href="https://github.com/le-doux/bitsy">github</a></p>

 				<p>~*~</p>
 			</div>
@@ -174,4 +174,4 @@ html, body {
 	</div>


-</body></html>
+</body></html>
\ No newline at end of file
```
