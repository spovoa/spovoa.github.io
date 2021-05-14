$(document).ready(function ()
{
    $('.data-formatada').mask('00/00/0000');

    $('.telefone').mask('(00) 00000-0000');

    $('.mes-ano').mask('00/0000');

    $('.hora-simples').mask('0:00');

    $('.monetario').maskMoney({prefix:'R$ ', allowNegative: false, thousands:'.', decimal:',', affixesStay: false});

    // busca notificações do usuário
    const nu = () =>
    {
        $.ajax({
            url: '/principal/notificacoes_usuario',
            success: function(data)
            {
                $(".notificacoes-usuario").html(data);
            },
            statusCode: {
                500: function()
                {
                    $(".notificacoes-usuario").html('<p>Falha ao buscar as notificações (HJ4)</p>');
                }
            }
        });
    };

    // busca notificações do gestor
    const ng = () =>
    {
        $.ajax({
            url: '/principal/notificacoes_gestor',
            success: function(data)
            {
                $(".notificacoes-gestor").html(data);
            },
            statusCode:
            {
                500: function()
                {
                    $(".notificacoes-gestor").html('<p>Falha ao buscar as notificações (HJ6)</p>');
                }
            }
        });
    };

    nu();

    if ($('#indicador-gestor').val() === 'True')
    {
        ng();
    }
});
