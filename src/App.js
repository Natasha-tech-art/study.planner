// Example Structure in App.js
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/subjects" element={<Subjects />} />
    <Route path="/tasks" element={<Tasks />} />
    {/* ... other routes */}
  </Routes>
  <Footer />
</Router>
