import Container from "./Container"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="bg-white py-5">
        <Container>
            {/* logo */}
            <Logo />
            {/* NavButton */}
            {/* NavAdmin */}
        </Container>
    </header>
  ) 
}
 
export default Header