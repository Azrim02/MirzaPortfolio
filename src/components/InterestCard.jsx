import Card from 'react-bootstrap/Card';

function InterestCard({ skillName, logoSrc, link }) {
    const cardstyle = {
        width:  'auto',
        height: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: '1px solid #ddd',
        boxShadow: '4px 4px 12px rgba(0,0,0,0.1)',
        margin: '10px',
        padding: '10px',
        display: 'flex',
    };

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        <Card style={cardstyle} className="InterestCard">
          <div
            style={{
              display: 'flex',            // horizontal layout
              alignItems: 'center',       // vertical center
              justifyContent: 'flex-start',
              gap: '15px',
              width: '100%',
              height: '100%',             // ensure container fills card height
              padding: '0 1rem',          // optional horizontal padding
            }}
          >
            {/* Image fixed at left */}
            <img
              src={logoSrc}
              alt={skillName}
              style={{
                flex: '0 0 auto',
                width: '80px',
                height: '80px',
                objectFit: 'contain',
              }}
            />

            {/* Text stretches, vertically centered */}
            <div
              style={{
                flex: '1 1 auto',
                display: 'flex',
                justifyContent: 'center', // horizontal center inside text div
                alignItems: 'center',   // vertical center inside flex container
              }}
            >
              <h3 style={{ 
                margin: 0, whiteSpace: 'wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis', 
                }}
                >
                  {skillName}
                  </h3>
            </div>
          </div>
        </Card>
      </a>


  );
}

export default InterestCard;