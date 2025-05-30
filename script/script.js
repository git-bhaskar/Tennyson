function OpenLink(element, url) {
            window.open(url, '_blank');
        }

function showSeason(season) {
            const seasons = document.querySelectorAll('.episode-list');
            seasons.forEach(s => s.style.display = 'none');
            document.getElementById(`season-${season}`).style.display = 'block';

            const buttons = document.querySelectorAll('.season-tab');
            buttons.forEach(b => b.classList.remove('active'));
            buttons[season - 1].classList.add('active');
        }
function OpenLink(element, url) {
            window.open(url, '_blank');
}
