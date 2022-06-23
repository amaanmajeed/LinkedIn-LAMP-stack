<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<!--Style CSS-->
	<link rel="stylesheet" href="assets/css/mystyle.css" />

</head>

<body>
	<div class="top">
		<h2>Linked<span>  <i class="fab fa-linkedin"></i>  </span></h2>
	</div>
	<form method="post" action="assets/php/actions.php?login">

		<div class="container">
			<h2>
				Linked<span>
					<i class="fab fa-linkedin"></i>
				</span>
			</h2>
			<div class="text">
				<h1>Sign in</h1>
				<p>Stay updated on your professional world</p>
			</div>
			<div class="your-input">
				<div class="input">
					<input type="text" name="username_email" id="email"  required />
					<label for="email">Email</label>
				</div>
				<div class="input">
					<input type="password" name="password" id="password" required />
					<label for="password">Password</label>
				</div>
				<?=showError('password')?>
                <?=showError('checkuser')?>
			</div>
			<a href="?forgotpassword&newfp" class="forgot-password-link"> Forgot Password? </a>
			<input type="submit" value="Sign In" name="submit" class="submit_btn">
			<p class="join-link">
				New to linkedin?
				<a href="?signup" class="join-now"> Join now	</a>
			</p>
		</div>
	</form>




</body>

</html>
