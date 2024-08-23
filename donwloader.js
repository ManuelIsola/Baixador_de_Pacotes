function generateInputs() {
        const numPackages = document.getElementById('numPackages').value;
        const urlInputsDiv = document.getElementById('urlInputs');
        urlInputsDiv.innerHTML = '';  // Limpa os inputs existentes

        for (let i = 0; i < numPackages; i++) {
            const inputGroup = document.createElement('div');
            inputGroup.className = 'input-group mb-3';
            
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'form-control url-input';
            input.placeholder = `URL do Pacote ${i + 1}`;
            input.required; 
            
            inputGroup.appendChild(input);
            urlInputsDiv.appendChild(inputGroup);
        }
    }

    async function downloadPackages() {
        const urlInputs = document.getElementsByClassName('url-input');
        const progressDiv = document.getElementById('progress');
        progressDiv.innerHTML = '';

        for (let input of urlInputs) {
            const url = input.value;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erro: ${response.statusText}`);
                }

                const blob = await response.blob();
                const extension = getExtensionFromURL(url);
                const folderName = extension ? extension.toUpperCase() : 'OUTROS';
                const downloadUrl = window.URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = downloadUrl;
                a.download = url.split('/').pop();; // Sugestão de nome com a extensão
                document.body.appendChild(a);
                a.click();

                window.URL.revokeObjectURL(downloadUrl);
                progressDiv.innerHTML += `<div class="alert alert-success">Download de <strong>${url.split('/').pop()}</strong> completo! Sugestão: Mova para a pasta <strong>${folderName}</strong>.</div>`;
            } catch (error) {
                console.error('Erro ao baixar o pacote:', error);
                progressDiv.innerHTML += `<div class="alert alert-danger">Ocorreu um erro ao tentar baixar <strong>${url.split('/').pop()}</strong>.</div>`;
            }
        }
    }

    function getExtensionFromURL(url) {
        return url.split('.').pop().split(/\#|\?/)[0];
    }