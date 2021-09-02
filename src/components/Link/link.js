const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '10px',
            width: '80px',
            color: 'blueviolet',
            borderRadius: '50px',
            backgroundColor: 'orange'
        }}
    >
        {children}
    </button>
)
export default Link;