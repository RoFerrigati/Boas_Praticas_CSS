module.exports = {
    plugins: [
        require('cssnano')({
            preset: [
                'default',
                {
                    discardComments: { removeAll: true }, // Remove todos os comentários
                    normalizeWhitespace: false, // Não normaliza os espaços
                },
            ],
        }),
    ],
};
