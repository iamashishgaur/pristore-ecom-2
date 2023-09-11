function PrivateRoute({ component: Component, ...rest }) {
  // Logic to check if user is logged in and their role
  const isLoggedIn = true; // Replace with your actual authentication logic
  const isAdmin = true; // Replace with your actual role checking logic

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          isAdmin ? (
            <AdminLayout>
              <Component {...props} />
            </AdminLayout>
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
