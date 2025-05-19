// Dados da equipe
const teamMembers = [
    {
        name: "Davidson",
        role: "#",
        bio: "#",
        email: "#",
        whatsapp: "#",
        linkedin: "#",
        github: "#",
        photo: "#"
    },
    {
        name: "Gustavo",
        role: "#",
        bio: "#",
        email: "#",
        whatsapp: "#",
        linkedin: "#",
        github: "#",
        photo: "#"
    },
    {
        name: "Isaquias",
        role: "#",
        bio: "#",
        email: "#",
        whatsapp: "#",
        linkedin: "#",
        github: "#",
        photo: "#"
    },
    {
        name: "Rafaela",
        role: "#",
        bio: "#",
        email: "#",
        whatsapp: "#",
        linkedin: "#",
        github: "#",
        photo: "#"
    },
    {
        name: "Ryan",
        role: "Cofundador, Backend & Database",
        bio: "Sou um dos fundadores da startup e responsável pelo desenvolvimento do backend e pela gestão do banco de dados, garantindo a segurança e eficiência das operações.",
        email: "ryangabrj@gmail.com",
        whatsapp: "https://api.whatsapp.com/send?phone=5511942443562",
        linkedin: "https://linkedin.com/in/ryangabrielcosta/",
        github: "https://github.com/RyanGBC",
        photo: "img/ryan.png"
    },
    {
        name: "Vinicius",
        role: "#",
        bio: "#",
        email: "#",
        whatsapp: "#",
        linkedin: "#",
        github: "#",
        photo: "#"
    }
];

// Gerar cards de membros da equipe
const teamGrid = document.getElementById('teamGrid');

teamMembers.forEach((member, index) => {
    const memberCard = document.createElement('div');
    memberCard.className = 'team-member';

    // Gerar iniciais para o avatar placeholder
    const initials = member.name.split(' ').map(name => name[0]).join('');

    memberCard.innerHTML = `
        <div class="member-photo">
            ${member.photo ? `<img src="${member.photo}" alt="${member.name}">` : 
            `<div class="placeholder-avatar">${initials}</div>`}
        </div>
        <div class="member-info">
            <h2 class="member-name">${member.name}</h2>
            <p class="member-role">${member.role}</p>
            <p class="member-bio">${member.bio}</p>
            <div class="contact-buttons">
                <a href="mailto:${member.email}" class="contact-btn email">
                    <img src="img/gmail.png" alt="Email" style="width:20px;height:20px;vertical-align:middle; margin-right: 33px"> <span style="margin-left:-30px"> Email </span>
                </a>
                <a href="whatsaap:${member.whatsapp}" class="contact-btn">
                    <img src="img/whatsapp.png" alt="WhatsApp" style="width:20px;height:20px;vertical-align:middle; margin-right: 33px"> <span style="margin-left:-35px"> WhatsApp</span>
                </a>
            </div>
            <div class="contact-buttons" style="margin-top: 8px;">
                <a href="${member.linkedin}" target="_blank" class="contact-btn linkedin">
                    <img src="img/linkedin.png" alt="LinkedIn" style="width:20px;height:20px;vertical-align:middle;"> LinkedIn
                </a>
                <a href="${member.github}" target="_blank" class="contact-btn github">
                    <img src="img/logotipo-do-github.png" alt="GitHub" style="width:20px;height:20px;vertical-align:middle;"> GitHub
                </a>
            </div>
        </div>
    `;

    teamGrid.appendChild(memberCard);
});

// Toggle do modo escuro
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
});

// Botão para voltar ao topo
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Funções para salvar contatos
function createVCard(member) {
    return `BEGIN:VCARD
VERSION:3.0
FN:${member.name}
TITLE:${member.role} at WorkEase
TEL;TYPE=CELL:${member.phone}
EMAIL:${member.email}
URL;TYPE=LinkedIn:https://${member.linkedin}
NOTE:${member.bio}
END:VCARD`;
}

function downloadVCard(vcardContent, filename) {
    const blob = new Blob([vcardContent], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Botão para salvar todos os contatos
document.getElementById('saveAllContacts').addEventListener('click', (e) => {
    e.preventDefault();

    let allVCards = '';
    teamMembers.forEach(member => {
        allVCards += createVCard(member) + '\n';
    });

    downloadVCard(allVCards, 'startup_team_contacts.vcf');
});

// Botão flutuante para salvar todos os contatos
document.getElementById('saveTeamContactsBtn').addEventListener('click', () => {
    let allVCards = '';
    teamMembers.forEach(member => {
        allVCards += createVCard(member) + '\n';
    });

    downloadVCard(allVCards, 'startup_team_contacts.vcf');
});

// Modal QR Code (funcionalidade simulada)
const modal = document.getElementById('qrModal');
const closeModal = document.getElementById('closeModal');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal quando clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});